/**
 * API Test — Authentication Endpoints
 *
 * Example tests for login/auth APIs.
 * Replace BASE_URL with your actual TN EMIS API when ready.
 *
 * Run: npx playwright test --project=api
 * Run this file only: npx playwright test tests/api/auth.api.spec.js --project=api
 */
import { test, expect } from "@playwright/test";
import { currentEnv } from "../../config/index.js";

// Use your app's API base URL from config
const BASE_URL = currentEnv.apiBaseURL;

test.describe("Authentication API", () => {

    test("POST /auth/login — valid credentials should return token", async ({ request }) => {
        const response = await request.post(`${BASE_URL}/auth/login`, {
            data: {
                username: currentEnv.credentials.username,
                password: currentEnv.credentials.password
            }
        });

        // Expect success (200 or 201)
        expect(response.status()).toBeLessThan(300);

        const body = await response.json();

        // Verify token is returned (adjust field name based on your API)
        console.log("Login response:", JSON.stringify(body, null, 2));

        // Common token field names — uncomment the one your API uses:
        // expect(body).toHaveProperty("token");
        // expect(body).toHaveProperty("access_token");
        // expect(body).toHaveProperty("data.token");
    });

    test("POST /auth/login — invalid credentials should return 401", async ({ request }) => {
        const response = await request.post(`${BASE_URL}/auth/login`, {
            data: {
                username: "invaliduser",
                password: "wrongpassword"
            }
        });

        // Expect unauthorized
        expect(response.status()).toBeGreaterThanOrEqual(400);
        expect(response.status()).toBeLessThan(500);

        console.log("Error response status:", response.status());
    });

    test("POST /auth/login — empty credentials should return 400", async ({ request }) => {
        const response = await request.post(`${BASE_URL}/auth/login`, {
            data: {
                username: "",
                password: ""
            }
        });

        // Expect bad request or unauthorized
        expect(response.status()).toBeGreaterThanOrEqual(400);
    });

    test("GET /protected-endpoint — without token should return 401", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/dashboard`, {
            headers: {
                // No authorization header
            }
        });

        // Should be unauthorized without token
        expect(response.status()).toBeGreaterThanOrEqual(400);
    });

});

test.describe("API Health Check", () => {

    test("should return 200 for base URL", async ({ request }) => {
        const response = await request.get(currentEnv.baseURL);

        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();
    });

    test("should respond within acceptable time", async ({ request }) => {
        const start = Date.now();
        const response = await request.get(currentEnv.baseURL);
        const responseTime = Date.now() - start;

        expect(response.ok()).toBeTruthy();
        expect(responseTime).toBeLessThan(10000); // 10 seconds max

        console.log(`Health check response time: ${responseTime}ms`);
    });

});

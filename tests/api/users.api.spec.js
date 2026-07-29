/**
 * API Test — Users Endpoints
 *
 * Example API tests using JSONPlaceholder (free fake REST API).
 * Replace the base URL and endpoints with your actual API.
 *
 * Run: npx playwright test --project=api
 */
import { test, expect } from "@playwright/test";

const BASE_URL = "https://jsonplaceholder.typicode.com";

test.describe("GET /users", () => {

    test("should return list of users", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/users`);

        expect(response.status()).toBe(200);

        const users = await response.json();
        expect(users).toBeInstanceOf(Array);
        expect(users.length).toBeGreaterThan(0);

        // Verify first user has expected fields
        expect(users[0]).toHaveProperty("id");
        expect(users[0]).toHaveProperty("name");
        expect(users[0]).toHaveProperty("email");
        expect(users[0]).toHaveProperty("username");
    });

    test("should return a single user by ID", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/users/1`);

        expect(response.status()).toBe(200);

        const user = await response.json();
        expect(user.id).toBe(1);
        expect(user.name).toBeTruthy();
        expect(user.email).toContain("@");
    });

    test("should return 404 for non-existent user", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/users/9999`);

        expect(response.status()).toBe(404);
    });

});

test.describe("POST /users", () => {

    test("should create a new user", async ({ request }) => {
        const newUser = {
            name: "Aadhithya K",
            username: "aadhithya",
            email: "aadhithya@example.com",
            phone: "9876543210"
        };

        const response = await request.post(`${BASE_URL}/users`, {
            data: newUser
        });

        expect(response.status()).toBe(201);

        const createdUser = await response.json();
        expect(createdUser).toHaveProperty("id");
        expect(createdUser.name).toBe(newUser.name);
        expect(createdUser.email).toBe(newUser.email);
    });

    test("should handle empty body", async ({ request }) => {
        const response = await request.post(`${BASE_URL}/users`, {
            data: {}
        });

        // JSONPlaceholder still returns 201, but real APIs would return 400
        expect(response.status()).toBeLessThan(500);
    });

});

test.describe("PUT /users", () => {

    test("should update an existing user", async ({ request }) => {
        const updatedData = {
            name: "Updated Name",
            email: "updated@example.com"
        };

        const response = await request.put(`${BASE_URL}/users/1`, {
            data: updatedData
        });

        expect(response.status()).toBe(200);

        const user = await response.json();
        expect(user.name).toBe(updatedData.name);
        expect(user.email).toBe(updatedData.email);
    });

});

test.describe("DELETE /users", () => {

    test("should delete a user", async ({ request }) => {
        const response = await request.delete(`${BASE_URL}/users/1`);

        expect(response.status()).toBe(200);
    });

});

/**
 * API Test — Posts Endpoints
 *
 * Tests CRUD operations on /posts endpoint.
 * Demonstrates: query params, response validation, chained requests.
 *
 * Run: npx playwright test --project=api
 */
import { test, expect } from "@playwright/test";

const BASE_URL = "https://jsonplaceholder.typicode.com";

test.describe("Posts API — CRUD Operations", () => {

    test("GET /posts — should return all posts", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/posts`);

        expect(response.status()).toBe(200);

        const posts = await response.json();
        expect(posts.length).toBe(100); // JSONPlaceholder has 100 posts

        // Validate structure
        const post = posts[0];
        expect(post).toHaveProperty("userId");
        expect(post).toHaveProperty("id");
        expect(post).toHaveProperty("title");
        expect(post).toHaveProperty("body");
    });

    test("GET /posts?userId=1 — should filter posts by user", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/posts?userId=1`);

        expect(response.status()).toBe(200);

        const posts = await response.json();
        expect(posts.length).toBeGreaterThan(0);

        // All posts should belong to userId 1
        for (const post of posts) {
            expect(post.userId).toBe(1);
        }
    });

    test("GET /posts/1/comments — should return comments for a post", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/posts/1/comments`);

        expect(response.status()).toBe(200);

        const comments = await response.json();
        expect(comments.length).toBeGreaterThan(0);

        // Validate comment structure
        expect(comments[0]).toHaveProperty("postId", 1);
        expect(comments[0]).toHaveProperty("name");
        expect(comments[0]).toHaveProperty("email");
        expect(comments[0]).toHaveProperty("body");
    });

    test("POST /posts — should create a new post", async ({ request }) => {
        const newPost = {
            title: "Playwright API Testing",
            body: "This is an example post created via Playwright API test.",
            userId: 1
        };

        const response = await request.post(`${BASE_URL}/posts`, {
            data: newPost
        });

        expect(response.status()).toBe(201);

        const created = await response.json();
        expect(created.id).toBe(101); // JSONPlaceholder returns 101
        expect(created.title).toBe(newPost.title);
        expect(created.body).toBe(newPost.body);
        expect(created.userId).toBe(newPost.userId);
    });

    test("PATCH /posts/1 — should partially update a post", async ({ request }) => {
        const response = await request.patch(`${BASE_URL}/posts/1`, {
            data: { title: "Patched Title" }
        });

        expect(response.status()).toBe(200);

        const patched = await response.json();
        expect(patched.title).toBe("Patched Title");
        expect(patched.id).toBe(1);
        // Other fields should remain
        expect(patched.body).toBeTruthy();
    });

    test("DELETE /posts/1 — should delete a post", async ({ request }) => {
        const response = await request.delete(`${BASE_URL}/posts/1`);

        expect(response.status()).toBe(200);
    });

});

test.describe("Posts API — Response Time & Headers", () => {

    test("should respond within 5 seconds", async ({ request }) => {
        const startTime = Date.now();
        const response = await request.get(`${BASE_URL}/posts/1`);
        const duration = Date.now() - startTime;

        expect(response.status()).toBe(200);
        expect(duration).toBeLessThan(5000);

        console.log(`Response time: ${duration}ms`);
    });

    test("should return correct content-type header", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/posts/1`);

        const contentType = response.headers()["content-type"];
        expect(contentType).toContain("application/json");
    });

});

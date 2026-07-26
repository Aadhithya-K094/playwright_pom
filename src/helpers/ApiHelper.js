/**
 * ApiHelper - Utility for making API requests within Playwright tests.
 *
 * Usage:
 *   import { ApiHelper } from "../src/helpers/ApiHelper.js";
 *
 *   const api = new ApiHelper(request); // `request` from Playwright fixtures
 *   const response = await api.get("/users");
 *   const user = await api.post("/users", { name: "Test" });
 */

export class ApiHelper {

    constructor(request, baseURL = "") {
        this.request = request;
        this.baseURL = baseURL;
    }

    /**
     * Send a GET request.
     * @param {string} endpoint - API path (e.g. "/users")
     * @param {object} [headers] - Additional headers
     * @returns {Promise<{status: number, body: any}>}
     */
    async get(endpoint, headers = {}) {

        const response = await this.request.get(`${this.baseURL}${endpoint}`, {
            headers
        });

        return {
            status: response.status(),
            body: await response.json().catch(() => await response.text())
        };
    }

    /**
     * Send a POST request.
     * @param {string} endpoint - API path
     * @param {object} data - Request body
     * @param {object} [headers] - Additional headers
     * @returns {Promise<{status: number, body: any}>}
     */
    async post(endpoint, data, headers = {}) {

        const response = await this.request.post(`${this.baseURL}${endpoint}`, {
            data,
            headers
        });

        return {
            status: response.status(),
            body: await response.json().catch(() => await response.text())
        };
    }

    /**
     * Send a PUT request.
     * @param {string} endpoint - API path
     * @param {object} data - Request body
     * @param {object} [headers] - Additional headers
     * @returns {Promise<{status: number, body: any}>}
     */
    async put(endpoint, data, headers = {}) {

        const response = await this.request.put(`${this.baseURL}${endpoint}`, {
            data,
            headers
        });

        return {
            status: response.status(),
            body: await response.json().catch(() => await response.text())
        };
    }

    /**
     * Send a DELETE request.
     * @param {string} endpoint - API path
     * @param {object} [headers] - Additional headers
     * @returns {Promise<{status: number, body: any}>}
     */
    async delete(endpoint, headers = {}) {

        const response = await this.request.delete(`${this.baseURL}${endpoint}`, {
            headers
        });

        return {
            status: response.status(),
            body: await response.json().catch(() => await response.text())
        };
    }

}

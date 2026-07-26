/**
 * Dashboard Test Data
 *
 * Static test data for dashboard tests.
 */
import { currentEnv } from "../../config/index.js";

export const loginData = {

    url: currentEnv.loginURL,

    username: currentEnv.credentials.username,

    password: currentEnv.credentials.password

};

/**
 * Login Test Data
 *
 * Static test data for login tests.
 * URLs and credentials are pulled from the environment config automatically.
 */
import { currentEnv } from "../../config/index.js";

const loginData = {

    url: currentEnv.loginURL,

    title: "EMIS | Tamil Nadu Schools",

    validUser: currentEnv.credentials.username,

    validPassword: currentEnv.credentials.password,

    invalidUser: "jkdbfbjdsbvi",

    invalidPassword: "dhhdsuivb",

    space: "   "

};

export default loginData;

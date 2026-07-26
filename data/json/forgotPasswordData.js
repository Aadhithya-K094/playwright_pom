/**
 * Forgot Password Test Data
 *
 * Static test data for the forgot password flow.
 */
import { currentEnv } from "../../config/index.js";

const forgotPasswordData = {

    url: currentEnv.loginURL,

    validUser: currentEnv.credentials.username,

    invalidUser1: "40286@..09",

    invalidUser2: "4028609548494",

    spaceUser: "",

    invalidOtp1: "8555555",

    invalidOtp2: "@@@@.....",

    validOtp: "",

    invalidPassword1: "",

    invalidPassword2: "test123",

    validPassword: "Test@1234"

};

export default forgotPasswordData;

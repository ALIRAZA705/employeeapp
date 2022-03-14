//auth constants
import {
    AUTH_USER,
    AUTH_USER_SUCCESS,
    AUTH_USER_FAILURE,
} from "../constants/AuthUser";
import jwt from "jwt-decode"; // import dependency

const INIT_STATE = {
    authUserData: {},
    loadingAuthUserData: true,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                loadingAuthUserData: true,
            };
        case AUTH_USER_SUCCESS:
            // eslint-disable-next-line no-case-declarations
            const user = jwt(action.payload.accessToken); // decode your token here
            console.log("here is auth user jwt", user);
            if (action.payload.ok) {
                localStorage.setItem("accessToken", action.payload.accessToken);
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                localStorage.setItem(
                    "refreshToken",
                    action.payload.refreshToken
                );
                return {
                    ...state,
                    loadingAuthUserData: false,
                    authUserData: user,
                };
            }

        // eslint-disable-next-line no-fallthrough
        case AUTH_USER_FAILURE:
            localStorage.removeItem("accessToken");
            return {
                ...state,
                loadingAuthUserData: false,
                authUserData: "Error in  getting Club Data",
            };
        default:
            return state;
    }
};

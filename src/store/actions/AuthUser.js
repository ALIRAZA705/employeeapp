import {
    AUTH_USER,
    AUTH_USER_SUCCESS,
    AUTH_USER_FAILURE,
} from "../constants/AuthUser";

// for user authentication
export const AuthUser = (data) => {
    return {
        type: AUTH_USER,
        payload: data,
    };
};
export const AuthUserSuccess = (payload) => {
    console.log("here is payload", payload);
    return {
        type: AUTH_USER_SUCCESS,
        payload,
    };
};
export const AuthUserFailure = (payload) => {
    return {
        type: AUTH_USER_FAILURE,
        payload,
    };
};

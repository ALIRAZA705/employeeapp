import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "../constants/Logout";

// for user authentication
export const LogoutUser = (data) => {
    return {
        type: LOGOUT,
        payload: data,
    };
};
export const LogoutUserSuccess = (payload) => {
    console.log("here is payload", payload);
    return {
        type: LOGOUT_SUCCESS,
        payload,
    };
};
export const LogoutUserFailure = (payload) => {
    return {
        type: LOGOUT_FAILURE,
        payload,
    };
};

import {
    LOGGED_IN_USER_Info,
    LOGGED_IN_USER_INFO_SUCCESS,
    LOGGED_IN_USER_INFO_FAILURE,
} from "../constants/LoggedInUserInfo";

// for add club venue
export const loggedInUserInfo = (data) => {
    return {
        type: LOGGED_IN_USER_Info,
        payload: data,
    };
};
export const loggedInUserInfoSuccess = (payload) => {
    return {
        type: LOGGED_IN_USER_INFO_SUCCESS,
        payload,
    };
};
export const loggedInUserInfoFailure = (payload) => {
    return {
        type: LOGGED_IN_USER_INFO_FAILURE,
        payload,
    };
};

import {
    GET_USERS_INFO,
    GET_USERS_INFO_SUCCESS,
    GET_USERS_INFO_FAILURE,
} from "../constants/GetUsers";

// for user authentication
export const GetUsersInfo = (data) => {
    return {
        type: GET_USERS_INFO,
        payload: data,
    };
};
export const GetUsersInfoSuccess = (payload) => {
    console.log("here is payload", payload);
    return {
        type: GET_USERS_INFO_SUCCESS,
        payload,
    };
};
export const GetUsersInfoFailure = (payload) => {
    return {
        type: GET_USERS_INFO_FAILURE,
        payload,
    };
};

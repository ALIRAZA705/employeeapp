import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
} from "../constants/RegisterUser";

// for user authentication
export const RegisterUser = (data) => {
    console.log("here is register data");
    return {
        type: REGISTER_USER,
        payload: data,
    };
};
export const RegisterUserSuccess = (payload) => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload,
    };
};
export const RegisterUserFailure = (payload) => {
    return {
        type: REGISTER_USER_FAILURE,
        payload,
    };
};

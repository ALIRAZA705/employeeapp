//auth constants
import {
    GET_USERS_INFO,
    GET_USERS_INFO_SUCCESS,
    GET_USERS_INFO_FAILURE,
} from "../constants/GetUsers";

const INIT_STATE = {
    getUsersInfo: {},
    loadingGetUsersInfo: true,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_USERS_INFO:
            return {
                ...state,
                loadingGetUsersInfo: true,
            };
        case GET_USERS_INFO_SUCCESS:
            console.log("here is get reducer", action.payload);

            return {
                ...state,
                loadingGetUsersInfo: false,
                getUsersInfo: action.payload,
            };
        // eslint-disable-next-line no-fallthrough
        case GET_USERS_INFO_FAILURE:
            return {
                ...state,
                loadingGetUsersInfo: false,
                getUsersInfo: "Error in  getting Club Data",
            };
        default:
            return state;
    }
};

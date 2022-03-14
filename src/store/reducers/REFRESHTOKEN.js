//auth constants
import {
    AUTH_USER,
    AUTH_USER_SUCCESS,
    AUTH_USER_FAILURE,
} from "../constants/AuthUser";

const INIT_STATE = {
    authUserData: {},
    loadingAuthUserData: true,
};

export default (state = INIT_STATE, action) => {
    console.log("here is auth action", action);
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                loadingAuthUserData: true,
            };
        case AUTH_USER_SUCCESS:
            localStorage.setItem("accessToken", JSON.stringify(action.payload));
            return {
                ...state,
                loadingAuthUserData: false,
                authUserData: action.payload,
            };

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

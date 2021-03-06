import {
    LOGGED_IN_USER_Info,
    LOGGED_IN_USER_INFO_SUCCESS,
    LOGGED_IN_USER_INFO_FAILURE,
} from "../constants/LoggedInUserInfo";

const INIT_STATE = {
    loggedInUserData: {},
    loadingLoggedInUserData: true,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGGED_IN_USER_Info:
            return {
                ...state,
                loadingLoggedInUserData: true,
            };
        case LOGGED_IN_USER_INFO_SUCCESS:
            if (action.payload.status == "ok") {
                localStorage.setItem(
                    "accessToken",
                    JSON.stringify(action.payload)
                );
                return {
                    ...state,
                    loadingLoggedInUserData: false,
                    loggedInUserData: action.payload,
                };
            }
        // eslint-disable-next-line no-fallthrough
        case LOGGED_IN_USER_INFO_FAILURE:
            console.log("here is failure");
            localStorage.removeItem("accessToken");
            return {
                ...state,
                loadingLoggedInUserData: false,
                loggedInUserData: "Error in  getting Club Data",
            };
        default:
            return state;
    }
};

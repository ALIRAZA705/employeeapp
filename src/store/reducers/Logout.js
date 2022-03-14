//auth constants
import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "../constants/Logout";

const INIT_STATE = {
    logoutUserdata: {},
    loadingLogoutUserdata: true,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGOUT:
            return {
                ...state,
                loadingLogoutUserdata: true,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loadingLogoutUserdata: false,
                logoutUserdata: action.payload,
            };

        // eslint-disable-next-line no-fallthrough
        case LOGOUT_FAILURE:
            // localStorage.removeItem("accessToken");
            return {
                ...state,
                loadingLogoutUserdata: false,
                logoutUserdata: "Error in  getting Club Data",
            };
        default:
            return state;
    }
};

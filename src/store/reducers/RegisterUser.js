//auth constants
import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
} from "../constants/RegisterUser";

const INIT_STATE = {
    registerUserData: {},
    loadingRegisterUserData: true,
};

export default (state = INIT_STATE, action) => {
    console.log("here is auth action", action);
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                loadingRegisterUserData: true,
            };
        case REGISTER_USER_SUCCESS:
            localStorage.removeItem("accessToken");
            localStorage.setItem("accessToken", JSON.stringify(action.payload));
            return {
                ...state,
                loadingRegisterUserData: false,
                registerUserData: action.payload,
            };

        // eslint-disable-next-line no-fallthrough
        case REGISTER_USER_FAILURE:
            // localStorage.removeItem("accessToken");
            return {
                ...state,
                loadingRegisterUserData: false,
                registerUserData: "Error in  getting Club Data",
            };
        default:
            return state;
    }
};

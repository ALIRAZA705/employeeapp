import {
  LOGGED_IN_USER_Info,
  LOGGED_IN_USER_INFO_SUCCESS,
  LOGGED_IN_USER_INFO_FAILURE,
} from "../constants/LoggedInUserInfo";
import { useNavigate } from "react-router-dom";
const INIT_STATE = {
  loggedInUserData: {},
  loadingLoggedInUserData: true,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    // for add club venue  info
    case LOGGED_IN_USER_Info:
      return {
        ...state,
        loadingLoggedInUserData: true,
      };
    case LOGGED_IN_USER_INFO_SUCCESS:
      if (action.payload.status == "ok") {
        localStorage.setItem("accessToken", action.payload.accessToken);
        return {
          ...state,
          loadingLoggedInUserData: false,
          loggedInUserData: action.payload,
        };
      }
    case LOGGED_IN_USER_INFO_FAILURE:
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

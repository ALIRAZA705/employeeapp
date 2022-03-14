import { combineReducers } from "redux";
import LoggedInUserInfo from "./loggedInUserInfo";
import AuthUser from "./AuthUser";
import RegisterUser from "./RegisterUser";
import GetUsers from "./GetUsers";
import Logout from "./Logout";

const reducers = combineReducers({
    LoggedInUserInfo,
    AuthUser,
    RegisterUser,
    GetUsers,
    Logout,
});

export default reducers;

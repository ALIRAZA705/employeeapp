import { all } from "redux-saga/effects";
import loggedInUserInfo from "./LoggedInUserInfo";
import AuthUser from "./AuthUser";
import RegisterUser from "./RegisterUser";
import GetUsers from "./GetUsers";
import Logout from "./Logout";

export default function* rootSaga(getState) {
    yield all([
        loggedInUserInfo(),
        AuthUser(),
        RegisterUser(),
        GetUsers(),
        Logout(),
    ]);
}

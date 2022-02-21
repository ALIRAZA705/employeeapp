import { all } from "redux-saga/effects";
import loggedInUserInfo from "./LoggedInUserInfo";

export default function* rootSaga(getState) {
  yield all([loggedInUserInfo()]);
}

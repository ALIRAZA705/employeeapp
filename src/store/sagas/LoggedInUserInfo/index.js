import { call, put, takeEvery } from "redux-saga/effects";
import {
  loggedInUserInfoSuccess,
  loggedInUserInfoFailure,
} from "../../actions/LoggedInUserInfo";
import { LOGGED_IN_USER_Info } from "../../constants/LoggedInUserInfo";
import { baseUrl } from "../../../util/contactConstants";
import postRequest from "../../../util/APIHelperPost";

export const fetchLoggedInInfoRequest = async (actions) => {
  let body = JSON.stringify({
    username: actions.payload.userCredential.email,
    password: actions.payload.userCredential.password,
  });
  console.log("here is the body :", actions.payload);
  return await postRequest(`https://www.mecallapi.com/api/login`, body)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};

function* fetchLoggedInInfo(params) {
  try {
    let response = yield call(fetchLoggedInInfoRequest, params);
    yield put(loggedInUserInfoSuccess(response));
  } catch (error) {
    console.error(error);
    yield put(loggedInUserInfoFailure(error));
  }
}

export default function* rootSaga() {
  yield takeEvery(LOGGED_IN_USER_Info, fetchLoggedInInfo);
}
// username: "karn.yong@mecallapi.com",
// password: "mecallapi",
import { call, put, takeEvery } from "redux-saga/effects";
//actions
import { LogoutUserSuccess, LogoutUserFailure } from "../../actions/Logout";
//constant
import { LOGOUT } from "../../constants/Logout";
//request type
import postRequest from "../../../util/APIHelperPost";

export const fetchLogoutUserRequest = async (actions) => {
    // eslint-disable-next-line no-return-await
    return await postRequest("http://localhost:4001/logout/")
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
};

function* fetchLogoutUser(params) {
    try {
        let response = yield call(fetchLogoutUserRequest, params);
        console.log("here is logout response", response);
        yield put(LogoutUserSuccess(response));
    } catch (error) {
        console.error(error);
        yield put(LogoutUserFailure(error));
    }
}

export default function* rootSaga() {
    yield takeEvery(LOGOUT, fetchLogoutUser);
}

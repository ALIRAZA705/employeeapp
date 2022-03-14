import { call, put, takeEvery } from "redux-saga/effects";
//actions
import {
    RegisterUserSuccess,
    RegisterUserFailure,
} from "../../actions/RegisterUser";
//constant
import { REGISTER_USER } from "../../constants/RegisterUser";
//request type
import postRequest from "../../../util/APIHelperPost";

export const fetchRegisterUserRequest = async (actions) => {
    let refreshToken = localStorage.getItem("refreshToken");
    let body = JSON.stringify({
        refreshToken: refreshToken,
    });
    // eslint-disable-next-line no-return-await
    return await postRequest("localhost:4001/auth/refresh-token", body)
        .then((response) => response)
        .catch((error) => {
            throw error;
        });
};

function* fetchRegisterUser(params) {
    try {
        let response = yield call(fetchRegisterUserRequest, params);
        yield put(RegisterUserSuccess(response));
    } catch (error) {
        console.error(error);
        yield put(RegisterUserFailure(error));
    }
}

export default function* rootSaga() {
    yield takeEvery(REGISTER_USER, fetchRegisterUser);
}

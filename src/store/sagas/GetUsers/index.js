import { call, put, takeEvery } from "redux-saga/effects";
//actions
import {
    GetUsersInfoSuccess,
    GetUsersInfoFailure,
} from "../../actions/GetUsersInfo";
//constant
import { GET_USERS_INFO } from "../../constants/GetUsers";
//request type
import getRequest from "../../../util/APIHelperGet";

export const fetchGetUsersRequest = async (actions) => {
    // eslint-disable-next-line no-return-await
    return await getRequest("http://localhost:4001/users/")
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
};

function* fetchGetUsers(params) {
    try {
        let response = yield call(fetchGetUsersRequest, params);
        yield put(GetUsersInfoSuccess(response));
    } catch (error) {
        console.error(error);
        yield put(GetUsersInfoFailure(error));
    }
}

export default function* rootSaga() {
    yield takeEvery(GET_USERS_INFO, fetchGetUsers);
}

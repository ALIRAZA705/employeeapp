import { call, put, takeEvery } from "redux-saga/effects";
//actions
import { AuthUserSuccess } from "../../actions/AuthUser";
//constant
import { AUTH_USER } from "../../constants/AuthUser";
// import { REGISTER_USER } from "../../constants/RegisterUser";
//request type
import postRequest from "../../../util/APIHelperPost";

export const fetchAuthUserRequest = async (actions) => {
    let body = JSON.stringify({
        email: actions.payload.userCredential.email,
        password: actions.payload.userCredential.password,
    });

    // eslint-disable-next-line no-return-await
    return await postRequest("http://localhost:4001/auth/", body)
        .then((response) => {
            // console.log("respose in fetchAuth first", response, response.ok);
            return response;
        })
        .catch((error) => {
            // console.error("error in auth user", error);
        });
};

function* fetchAuthUser(params) {
    // try {
    let response = yield call(fetchAuthUserRequest, params);
    console.log("response in fetchAuth in saga", response);

    yield put(AuthUserSuccess(response));
    //     } else {
    //         // console.error("error in auth user a", response);
    //         throw Error(response.status);
    //     }
    // } catch (error) {
    //     // console.error("error in auth user", error);
    //     if (error == 403) {
    //         yield put({
    //             type: REGISTER_USER,
    //         });
    //     }
    //     yield put(AuthUserFailure(error));
    // }
}

export default function* rootSaga() {
    yield takeEvery(AUTH_USER, fetchAuthUser);
}

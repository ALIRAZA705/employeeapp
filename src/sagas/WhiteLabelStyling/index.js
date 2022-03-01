import { call, put, takeEvery } from "redux-saga/effects";

import {
    whiteLabelStylingInfoSuccess,
    whiteLabelStylingInfoFailure,
} from "../../actions/WhiteLabelStyling";
import { WHITE_LABEL_STYLING_INFO } from "../../constants/WhiteLabelStyling";

import { baseUrl } from "../../../util/contactConstants";
import getRequest from "../../../util/APIHelperGet";

export const fetchWhiteLabelStyleInfoRequest = async (actions) => {
    return await getRequest(
        `${baseUrl}/solar-theme-api/profile/get?flag=${actions.payload}`
    )
        .then((response) => response)
        .catch((error) => {
            throw error;
        });
};

function* fetchWhiteLabelStyleInfo(params) {
    try {
        let response = yield call(fetchWhiteLabelStyleInfoRequest, params);
        yield put(whiteLabelStylingInfoSuccess(response));
    } catch (error) {
        console.error(error);
        yield put(whiteLabelStylingInfoFailure(error));
    }
}

export default function* rootSaga() {
    yield takeEvery(WHITE_LABEL_STYLING_INFO, fetchWhiteLabelStyleInfo);
}

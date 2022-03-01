import { call, put, takeEvery } from "redux-saga/effects";

import {
    addClubVenueInfoFailure,
    addClubVenueInfoSuccess,
} from "../../actions";
import { ADD_CLUB_VENUE_Info } from "../../constants";

import { baseUrl } from "../../../util/contactConstants";
import postRequest from "../../../util/APIHelperPost";

export const fetchClubAddVenueInfoRequest = async (actions) => {
    let body = JSON.stringify({
        clubId: actions.payload.clubId,
        venueId: actions.payload.venueId,
        venueType: actions.payload.venueType,
    });

    return await postRequest(`${baseUrl}/club/venue/save`, body)
        .then((response) => response)
        .catch((error) => {
            throw error;
        });
};

function* fetchClubAddVenueInfo(params) {
    try {
        let response = yield call(fetchClubAddVenueInfoRequest, params);
        yield put(addClubVenueInfoSuccess(response));
    } catch (error) {
        console.error(error);
        yield put(addClubVenueInfoFailure(error));
    }
}

export default function* rootSaga() {
    yield takeEvery(ADD_CLUB_VENUE_Info, fetchClubAddVenueInfo);
}

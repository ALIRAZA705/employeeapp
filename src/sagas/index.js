import { all } from "redux-saga/effects";

import addClubVenue from "./AddClubVenue";
import WhiteLabelStyling from "./WhiteLabelStyling";

export default function* rootSaga(getState) {
  yield all([addClubVenue(), WhiteLabelStyling()]);
}

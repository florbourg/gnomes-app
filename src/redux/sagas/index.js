import { all } from "redux-saga/effects";

import search from "./search";
import searchId from "./searchById";

export default function* rootSaga() {
  yield all([search(), searchId()]);
}

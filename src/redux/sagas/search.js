import { put, call, takeLatest } from "redux-saga/effects";
import {
  SEARCH_GNOMES_START,
  SEARCH_GNOMES_COMPLETE,
  SEARCH_GNOMES_ERROR,
} from "../../consts/actionTypes";
import { apiCall } from "../api";

export function* searchGnomes({ payload }) {
  try {
    const results = yield call(
      apiCall,
      "/rrafols/mobile_test/master/data.json",
      null,
      null,
      "GET"
    );
    yield put({ type: SEARCH_GNOMES_COMPLETE, results });
  } catch (error) {
    yield put({ type: SEARCH_GNOMES_ERROR, error });
  }
}

export default function* search() {
  yield takeLatest(SEARCH_GNOMES_START, searchGnomes);
}

import { put, takeLatest } from "redux-saga/effects";
import {
  SEARCH_GNOMES_BY_ID,
  SEARCH_GNOMES_BY_ID_COMPLETE,
  SEARCH_GNOMES_BY_ID_ERROR,
} from "../../consts/actionTypes";
import { filter } from "lodash";

export function* searchById({ payload }) {
  try {
    const results = filter(payload.array, { id: parseInt(payload.id) });
    yield put({ type: SEARCH_GNOMES_BY_ID_COMPLETE, results });
  } catch (error) {
    yield put({ type: SEARCH_GNOMES_BY_ID_ERROR, error });
  }
}

export default function* searchId() {
  yield takeLatest(SEARCH_GNOMES_BY_ID, searchById);
}

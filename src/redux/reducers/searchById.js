/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unreachable */
import {
  SEARCH_GNOMES_BY_ID,
  SEARCH_GNOMES_BY_ID_COMPLETE,
  SEARCH_GNOMES_BY_ID_ERROR,
} from "../../consts/actionTypes";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_GNOMES_BY_ID:
      return { ...state };
    case SEARCH_GNOMES_BY_ID_COMPLETE:
      return {
        ...state,
        gnome: action.results,
      };
    case SEARCH_GNOMES_BY_ID_ERROR:
      return { ...state, gnome: null };
    default:
      return { ...state };
  }
}

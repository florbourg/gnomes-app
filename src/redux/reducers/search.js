/* eslint-disable import/no-anonymous-default-export */
import {
  SEARCH_GNOMES_START,
  SEARCH_GNOMES_COMPLETE,
  SEARCH_GNOMES_ERROR,
} from "../../consts/actionTypes";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_GNOMES_START:
      return { ...state, isLoading: true };
    case SEARCH_GNOMES_COMPLETE:
      return {
        ...state,
        isLoading: false,
        gnomesResults: action.results.data,
      };
    case SEARCH_GNOMES_ERROR:
      return { ...state, isLoading: false, gnomes: null };
    default:
      return { ...state };
  }
}

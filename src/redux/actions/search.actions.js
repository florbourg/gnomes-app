import {
  SEARCH_GNOMES_START,
  SEARCH_GNOMES_BY_ID,
} from "../../consts/actionTypes";

export const searchGnomes = (payload) => ({
  type: SEARCH_GNOMES_START,
  payload,
});

export const searchById = (payload) => ({
  type: SEARCH_GNOMES_BY_ID,
  payload,
});

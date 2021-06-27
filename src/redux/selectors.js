import { get } from "lodash";

export const isSearchLoading = (state) => get(state, "search.isLoading");
export const gnomesResults = (state) =>
  get(state, "search.gnomesResults.Brastlewark");

export const gnomeById = (state) => get(state, "searchById.gnome");

export const getState = (state) => {
  return state;
};

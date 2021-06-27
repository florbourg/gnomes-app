import { combineReducers } from "redux";
import search from "./search";
import searchById from "./searchById";

const rootReducer = combineReducers({
  search,
  searchById,
});

export default rootReducer;

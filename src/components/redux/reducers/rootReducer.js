import { shopReducer } from "./shopReducer";

import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  add: shopReducer,
});

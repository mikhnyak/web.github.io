import { combineReducers } from "redux";
import cocktails from "./cocktails";
import errors from "./errors";
import auth from "./auth";
import messages from "./messages";
import cafes from "./cafes";
import ingredients from "./ingredients";
import orders from "./orders";

export default combineReducers({
  cocktails,
  errors,
  auth,
  messages,
  cafes,
  ingredients,
  orders,
});

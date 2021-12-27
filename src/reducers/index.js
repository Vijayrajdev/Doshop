import { combineReducers } from "redux";
import auth from "./Authreducer";
import loader from "./Loaderreducer";

export default combineReducers({
  auth,
  loader,
});

import { combineReducers } from "redux";
import auth from "./Authreducer";
import loader from "./Loaderreducer";
import products from "./Productsreducer";
import category from "./Categoryreducer";

export default combineReducers({
  auth,
  loader,
  products,
  category,
});

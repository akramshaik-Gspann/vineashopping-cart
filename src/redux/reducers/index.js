import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import {orderDetailsReducer} from "./orderDetailsReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  orderDetails: orderDetailsReducer
  // product: selectedProductsReducer,
  // cartProduct: selectedCartReduer 
});
export default reducers;

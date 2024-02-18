import { act } from "react-dom/test-utils";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const CartReducer = (state, action) => {
  let newState = {};
  if (action.type === ADD_TO_CART) {
    newState = { ...state };
  } else if (action.type === REMOVE_CART_ITEM) {
    newState = { ...state };
  } else if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    newState = { ...state };
  } else if (action.type === CLEAR_CART) {
    newState = { ...state };
  } else if (action.type === COUNT_CART_TOTALS) {
    newState = { ...state };
  } else {
    throw new Error(`No Matching "${action.type}" - action type`);
  }
  return newState;
};

export default CartReducer;

import { LOAD_PRODUCTS } from "../actions";

const FilterReducer = (state, action) => {
  const newState = {};
  if (action.type === LOAD_PRODUCTS) {
    newState = { ...state, all_products: action.payload };
  } else {
    throw new Error(`No Matching "${action.type}" - action type`);
  }

  return newState;
};

export default FilterReducer;

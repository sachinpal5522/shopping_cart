import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "../actions";

export default (state, action) => {
  let newState = {};
  switch (action.type) {
    case SIDEBAR_OPEN:
      console.log("sidebar open");
      newState = { ...state, isSidebarOpen: true };
      break;
    case SIDEBAR_CLOSE:
      console.log("sidebar close");
      newState = { ...state, isSidebarOpen: false };
      break;
    case GET_PRODUCTS_BEGIN:
      newState = { ...state, products_loading: true };
      break;
    case GET_PRODUCTS_SUCCESS:
      newState = {
        ...state,
        products_loading: false,
        products: action.payload,
        featured_products: action.payload.filter((product) => {
          return product.featured === true;
        }),
      };
      break;
    case GET_PRODUCTS_ERROR:
      newState = { ...state, products_error: true };
      break;
    case GET_SINGLE_PRODUCT_BEGIN:
      newState = {
        ...state,
        single_product_loading: true,
        single_product_error: false,
      };
      break;
    case GET_SINGLE_PRODUCT_SUCCESS:
      newState = {
        ...state,
        single_product_loading: false,
        single_product_error: false,
        single_product: action.payload,
      };
      break;
    case GET_SINGLE_PRODUCT_ERROR:
      newState = {
        ...state,
        single_product_loading: false,
        single_product: {},
        single_product_error: true,
      };
      break;
    default:
      console.log("sidebar default");
      newState = state;
      throw new Error(`No Matching "${action.type}" - action type`);
      break;
  }

  return newState;
};

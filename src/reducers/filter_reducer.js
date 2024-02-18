import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const FilterReducer = (state, action) => {
  let newState = {};
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    newState = {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
    };
  } else if (action.type === SET_GRIDVIEW) {
    newState = {
      ...state,
      grid_view: true,
    };
  } else if (action.type === SET_LISTVIEW) {
    newState = {
      ...state,
      grid_view: false,
    };
  } else if (action.type === UPDATE_SORT) {
    newState = {
      ...state,
      sort: action.payload.value,
    };
  } else if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.price - a.price;
      });
    } else if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    newState = {
      ...state,
      filtered_products: tempProducts,
    };
  } else if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.filters;
    let tempProducts = [...all_products];
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    if (category != "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.category === category;
      });
    }
    if (company != "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.company === company;
      });
    }
    if (color != "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }
    tempProducts = tempProducts.filter((product) => {
      return product.price <= price;
    });
    if (shipping) {
      tempProducts = tempProducts.filter((product) => {
        return product.shipping === shipping;
      });
    }

    newState = { ...state, filtered_products: tempProducts };
  } else if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    newState = { ...state, filters: { ...state.filters, [name]: value } };
  } else if (action.type === CLEAR_FILTERS) {
    newState = {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  } else {
    throw new Error(`No Matching "${action.type}" - action type`);
  }

  return newState;
};

export default FilterReducer;

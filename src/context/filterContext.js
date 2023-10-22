import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import { useProductContext } from "./products_context";
import { LOAD_PRODUCTS } from "../actions";

const initialState = {
  filtered_products: [],
  all_products: [],
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

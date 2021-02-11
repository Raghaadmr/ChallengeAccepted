import { createContext, useReducer, useEffect } from "react";
import reducers from "./Reducers";
import { getData } from "../utils/fetchData";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    notify: {},
    //auth{},
    cart: [],
    modal: {},
  };
  const [state, dispatch] = useReducer(reducers, initialState);
  const { cart } = state;

  useEffect(() => {
    const __next__cart01__raghad = JSON.parse(
      localStorage.getItem("__next__cart01__raghad")
    );
    if (__next__cart01__raghad)
      dispatch({ type: "ADD_CART", payload: __next__cart01__raghad });
  }, []);
  useEffect(() => {
    localStorage.setItem("__next__cart01__raghad", JSON.stringify(cart));
  }, [cart]);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

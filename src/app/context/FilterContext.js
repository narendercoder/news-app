'use client'
import { useReducer } from "react";

import { createContext, useContext } from "react";
import filterReducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  grid_view: true,
};

export const FilterContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(filterReducer, initialState);

  //to set grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  //to set list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };


  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};

'use client'
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/Reducer";
import axios from "axios";
import { newsdata } from "../config/sampleoutput";
import {headlines} from "../config/headlines"
const AppContext = React.createContext();

const initialState = {
  isLoading: true,
  isError: false,
  isNewsLoading: true,
  isSearchLoading: true,
  isCategoryLoading: true,
  isHeadlineLoading : true,
  headlines: [],
  news: [],
  categoryNews: [],
  searchNews: [],

};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const date = new Date()
  const formattedDate = date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
}).split('/').reverse().join('-');
 
  const getAllNews = async(url) =>{
    dispatch({type: "SET_NEWS_LOADING"})
    try {
        const response =  await axios.get( url );
        const data = newsdata || response.data
        // console.log(data)
       
      // const data = newsdata;

      dispatch({type: "GET_NEWS", payload: data})
    } catch (error) {
      dispatch({type: "API_ERROR"})
    }
  }
  const getSearchNews = async(url) =>{
    dispatch({type: "SET_SEARCH_LOADING"})
    try {
    
      const response = await axios.get( url );
        const data = response.data;
 
      dispatch({type: "GET_SEARCH_NEWS", payload: data})
    } catch (error) {
      dispatch({type: "API_ERROR"})
    }
  }
 
  const fetchnews = async(url) =>{
    dispatch({type: "SET_CATEGORY_LOADING"})
    try {
      const response = await axios.get( url );
        const data = response.data;
      

      dispatch({type: "GET_CATEGORY_NEWS", payload: data})
    } catch (error) {
      dispatch({type: "API_ERROR"})
    }
  }

  const getHeadlines = async(url) =>{
    dispatch({type: "SET_HEADLINE_LOADING"})
    try {
      const response =  await axios.get( url );
      const data = headlines || response.data
      console.log(data)
     
    // const data = newsdata;

    dispatch({type: "GET_HEADLINE", payload: data})
  } catch (error) {
    dispatch({type: "API_ERROR"})
  }
  }
 
  useEffect(()=>{
    getAllNews()
  }, [])

  useEffect(()=>{
    getHeadlines()
  }, [])

  return (
    <AppContext.Provider value={{ ...state, fetchnews, getSearchNews, getAllNews, formattedDate, getHeadlines  }}>{children}</AppContext.Provider>
  );
}


const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

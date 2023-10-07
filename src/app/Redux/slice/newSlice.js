import { newsdata } from "@/app/config/sampleoutput";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create async thunk for fetching news
export const fetchNews = createAsyncThunk("fetchNews", async (url) => {
    try {
      const response = await axios.get(url) ;
      return response.data.data
    //   return response.data.data ;
    } catch (error) {
      throw error;
    }
  });
  
  export const fetchSearchNews = createAsyncThunk("fetchSearchNews", async (url) => {
    try {
      const response = await axios.get(url) ;
      return response.data.data;
    } catch (error) {
      throw error;
    }
  });
  
  export const fetchCategoryNews = createAsyncThunk("fetchCategoryNews", async (url) => {
    try {
      const response = await axios.get(url) ;
      return response.data.data;
    } catch (error) {
      throw error;
    }
  });
  
  export const fetchHeadlines = createAsyncThunk("fetchHeadlines", async (url) => {
    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  });

const newsSlice = createSlice({
    name: "news",
    initialState: {
        isLoading: true,
        isError: false,
        isNewsLoading: true,
        isSearchLoading: true,
        isCategoryLoading: true,
        isHeadlineLoading: true,
        headlines: [],
        news: [],
        categoryNews: [],
        searchNews: [],
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchNews.pending, (state) =>{
            state.isNewsLoading = true;
        })
        builder.addCase(fetchNews.fulfilled, (state, action) =>{
            state.isNewsLoading = false;
            state.news = action.payload;
        })
        builder.addCase(fetchNews.rejected, (state) =>{
            state.isNewsLoading = false;
            state.isError = true;
        })
        
        //searchnews
        builder.addCase(fetchSearchNews.pending, (state) =>{
            state.isSearchLoading = true;
        })
        builder.addCase(fetchSearchNews.fulfilled, (state, action) =>{
            state.isSearchLoading = false;
            state.searchNews = action.payload;
        })
        builder.addCase(fetchSearchNews.rejected, (state) =>{
            state.isSearchLoading = false;
            state.isError = true;
        })
        
        //news by category
        builder.addCase(fetchCategoryNews.pending, (state) => {
            state.isCategoryLoading = true;
        })
        builder.addCase(fetchCategoryNews.fulfilled, (state, action) => {
            state.isCategoryLoading = false;
            state.categoryNews = action.payload;
        })
        builder.addCase(fetchCategoryNews.rejected, (state) => {
            state.isCategoryLoading = false;
            state.isError = true;
        })
       
        //headlines
        builder.addCase(fetchHeadlines.pending, (state) => {
            state.isHeadlineLoading = true;
        })
        builder.addCase(fetchHeadlines.fulfilled, (state, action) => {
            state.isHeadlineLoading = false;
            state.headlines = action.payload;
        })
        builder.addCase(fetchHeadlines.rejected, (state) => {
            state.isHeadlineLoading = false;
            state.isError = true;
        });

    }

    
})

export const { setFormattedDate } = newsSlice.actions;

export default newsSlice.reducer
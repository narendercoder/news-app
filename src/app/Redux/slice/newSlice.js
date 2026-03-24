import { newsdata } from "@/app/config/sampleoutput";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const date = new Date();



export const fetchNews = createAsyncThunk(
  "fetchNews",
  async () => {
    const res = await fetch(`/api/news?keyword=india&limit=10`);
    return await res.json();
  }
);

export const fetchSearchNews = createAsyncThunk(
  "fetchSearchNews",
  async ({ keyword, limit }) => {
    const res = await fetch(
      `/api/news?keyword=${keyword}&limit=${limit}`
    );
    return await res.json();
  }
);

export const fetchCategoryNews = createAsyncThunk(
  "fetchCategoryNews",
  async ({ category, limit }) => {
    const res = await fetch(
      `/api/news?category=${category}&limit=${limit}`
    );
    return await res.json();
  }
);

export const fetchHeadlines = createAsyncThunk(
  "fetchHeadlines",
  async (limit = 5) => {
    const res = await fetch(`/api/news?headlines=true&limit=${limit}`);
    return await res.json();
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.isNewsLoading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.isNewsLoading = false;
      state.news = action.payload;
    });
    builder.addCase(fetchNews.rejected, (state) => {
      state.isNewsLoading = false;
      state.isError = true;
    });

    //searchnews
    builder.addCase(fetchSearchNews.pending, (state) => {
      state.isSearchLoading = true;
    });
    builder.addCase(fetchSearchNews.fulfilled, (state, action) => {
      state.isSearchLoading = false;
      state.searchNews = action.payload;
    });
    builder.addCase(fetchSearchNews.rejected, (state) => {
      state.isSearchLoading = false;
      state.isError = true;
    });

    //news by category
    builder.addCase(fetchCategoryNews.pending, (state) => {
      state.isCategoryLoading = true;
    });
    builder.addCase(fetchCategoryNews.fulfilled, (state, action) => {
      state.isCategoryLoading = false;
      state.categoryNews = action.payload;
    });
    builder.addCase(fetchCategoryNews.rejected, (state) => {
      state.isCategoryLoading = false;
      state.isError = true;
    });

    //headlines
    builder.addCase(fetchHeadlines.pending, (state) => {
      state.isHeadlineLoading = true;
    });
    builder.addCase(fetchHeadlines.fulfilled, (state, action) => {
      state.isHeadlineLoading = false;
      state.headlines = action.payload;
    });
    builder.addCase(fetchHeadlines.rejected, (state) => {
      state.isHeadlineLoading = false;
      state.isError = true;
    });
  },
});

export const { setFormattedDate } = newsSlice.actions;

export default newsSlice.reducer;


//stepzen import curl 'http://api.mediastack.com/v1/news?access_key=80a97fb1047d9d4c3171876f1b279c84'
import { newsdata } from "@/app/config/sampleoutput";
// import { categories } from "@/app/constant";
// import { formatDate } from "@/app/helpers/datehelper";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const date = new Date();
// const formattedDate = formatDate(date);

//
export const fetchingNews = async (category, keywords, isDynamic, limit) => {

try {
     let BASE_URL = "";

    // 🔍 SEARCH API
    if (category) {
      BASE_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${limit}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`; 
    }
    // 📰 CATEGORY / HEADLINES API
    else {
      BASE_URL = `https://newsapi.org/v2/everything?q=${keywords}&language=en&sortBy=publishedAt&pageSize=${limit}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;
    }

    const res = await axios.get(`${BASE_URL}`, {
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
    });

    const data = res.data.articles;
    return data; // ⚡ returns { data: [...] }
  } catch (error) {
    console.error("Error fetching news:", error);
    return null;
  }

};


// Create async thunk for fetching news
export const fetchNews = createAsyncThunk("fetchNews", async () => {
  try {
    const response =  await fetchingNews("general") || newsdata.articles;
    return response

  } catch (error) {
    throw error
  }
});

  export const fetchSearchNews = createAsyncThunk("fetchSearchNews", async (keyword, limit) => {
    try {
      const response = await fetchingNews('',keyword, limit) 
      return response;
    } catch (error) {
      throw error;
    }
  });

export const fetchCategoryNews = createAsyncThunk("fetchCategoryNews",  async (cate) => {
    try {
      const response = await fetchingNews(cate) 
      return response
    } catch (error) {
      throw error;
    }
  }
);

export const fetchHeadlines = createAsyncThunk("fetchHeadlines",async () => {
    try {
      const response = await fetchingNews('', 'bitcoin', '', 5)
      return response
    } catch (error) {
      throw error;
    }
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
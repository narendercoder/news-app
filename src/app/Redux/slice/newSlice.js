import { newsdata } from "@/app/config/sampleoutput";
import { categories } from "@/app/constant";
import { formatDate } from "@/app/helpers/datehelper";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { gql } from "graphql-request";
import axios from "axios";
const date = new Date();
const formattedDate = formatDate(date);

//
export const fetchingNews = async (category, keywords, isDynamic, limit) => {
  // GraphQl query
  const query = gql`
query MyQuery(
    $access_key: String!
    $categories: String!
    $keywords: String
    $limit: String
) {
    myQuery(
        access_key: $access_key
        categories: $categories
        countries: "in"
        sort: "published_desc"
        keywords: $keywords
        limit: $limit
    ) {
        data {
            author
            category
            country
            description
            image
            language
            published_at
            source
            title
            url
        }
        pagination {
            count
            limit
            offset
            total
        }
    }
}`;

  // fetch function
  const res = await fetch(
    "https://hohrgrenzhausen.stepzen.net/api/hissing-quokka/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-type": "application/json",
        Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.NEXT_PUBLIC_API_KEY,
          categories: category,
          keywords: keywords,
          limit: limit
        },
      }),
    }
  );

//   console.log(
//     "Loading new data from API for category: " +
//       category +
//       " and keywords: " +
//       keywords
//   );

  const NewsResponse = await res.json();

  // return news
  return NewsResponse;
};


// Create async thunk for fetching news
export const fetchNews = createAsyncThunk("fetchNews", async () => {
  try {
    const response = await fetchingNews(categories.join(","))
    
    return response.data.myQuery.data;
    
  } catch (error) {
    throw error;
  }
});

  export const fetchSearchNews = createAsyncThunk("fetchSearchNews", async (url) => {
    try {
      const response = await fetchingNews(url) ;
      return response.data.myQuery.data;
    } catch (error) {
      throw error;
    }
  });

export const fetchCategoryNews = createAsyncThunk("fetchCategoryNews",  async (cate) => {
    try {
      const response = await fetchingNews(cate);
      return response.data.myQuery.data;
  
    } catch (error) {
      throw error;
    }
  }
);

export const fetchHeadlines = createAsyncThunk("fetchHeadlines",async () => {
    try {
      const response = await fetchingNews('','','',5);
      return response.data.myQuery.data;
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
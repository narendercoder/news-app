
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
        case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
        case "SET_NEWS_LOADING":
        return {
          ...state,
          isNewsLoading: true,
        };
        case "GET_NEWS":
        return {
          ...state,
          news: action.payload,
          isNewsLoading: false,
        };
        case "SET_SEARCH_LOADING":
          return{
            ...state,
            isSearchLoading: true,
          }
          case "GET_SEARCH_NEWS":
          return{
            ...state,
            searchNews: action.payload,
            isSearchLoading: false,
          }
          case "SET_CATEGORY_LOADING":
            return {
              ...state,
              isCategoryLoading: true,
            }
            case "GET_CATEGORY_NEWS":
            return {
              ...state,
              categoryNews: action.payload,
              isCategoryLoading: false,
            }
            case "SET_HEADLINE_LOADING":
            return {
              ...state,
              isHeadlineLoading: true,
            }
            case "GET_HEADLINE":
            return {
              ...state,
              headlines: action.payload,
              isHeadlineLoading: false,
            }
    default:
      return state;
  }
};

export default reducer;
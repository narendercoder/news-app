"use client";
import { useEffect } from "react";
import NewsList from "./NewsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../Redux/slice/newSlice";
import { formatDate } from "../helpers/datehelper";

const HomePage = () => {
  const newsdata = useSelector(state => state.news);
  const dispatch = useDispatch();
  const { news } = newsdata;
  const date = new Date();
  const formattedDate = formatDate(date);

  console.log(news)

  useEffect(()=>{
    dispatch(fetchNews())
  }, [])

  return (
    <div className="py-10 w-full ">
      <div className="news-content-area flex justify-center items-center">
          <div className="flex flex-col-reverse lg:justify-between lg:flex-row  w-full h-full">
              {/* main news */}
              <NewsList news={news}/>
          </div>
      </div>
    </div>
  );
};

export default HomePage;


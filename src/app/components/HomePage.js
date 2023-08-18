"use client";
import { useEffect } from "react";
import { useGlobalContext } from "../context/Context";
import { categories } from "../config/categories";
import NewsList from "./NewsList";

const HomePage = () => {
  const { news, getAllNews, formattedDate } = useGlobalContext();
  console.log(formattedDate)
  // http://api.mediastack.com/v1/news?access_key=${process.env.NEXT_PUBLIC_API_KEY}&countries=in&date=${formattedDate}&categories={categories.join(".")&limit={48}}
  useEffect(()=>{
    getAllNews(``)
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


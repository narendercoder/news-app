"use client";
import { useEffect } from "react";
import { useGlobalContext } from "../context/Context";
import NewsList from "./NewsList";

const HomePage = () => {
  const { news, getAllNews, formattedDate } = useGlobalContext();
  useEffect(()=>{
    getAllNews(`http://api.mediastack.com/v1/news?access_key=${process.env.NEXT_PUBLIC_API_KEY}&countries=in&date=${formattedDate}&categories=general,business,entertainment,health,science,sports,technology&limit={48}`)
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


'use client'
import React, { useEffect } from 'react';
import Headline from "./Headline";
// import { useGlobalContext } from '../context/Context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeadlines } from '../Redux/slice/newSlice';
import { formatDate } from '../helpers/datehelper';


const Headlines = () => {
  const dispatch = useDispatch()
  const newsdata = useSelector(state => state.news);
  const {headlines} = newsdata;
  const date = new Date();
  const formattedDate = formatDate(date);

  useEffect(()=>{
    dispatch(fetchHeadlines(`http://api.mediastack.com/v1/news?access_key=${process.env.NEXT_PUBLIC_API_KEY}&countries=in&date=${formattedDate}&limit=5`))
  }, [])

  return (
    <div>
    <div>
        <div className="entry-title pb-5 border-b border-gray-200 dark:border-gray-600">
            <h2>Top Headlines</h2>
            <span className='titledot'></span>
            <span className='titleline'></span>
        </div>
    </div>
    <div>
      {
        headlines.map((article) =>{
          return (
            <Headline
             key={article.title}
             article={article}
             />
          )
        })
      }
    </div>
    </div>
  )
}

export default Headlines
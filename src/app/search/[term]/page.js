'use client'
import { fetchSearchNews } from '@/app/Redux/slice/newSlice';
import NewsList from '@/app/components/NewsList';
import { formatDate } from '@/app/helpers/datehelper';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';

const SearchPage =  ({params: {term}}) => {
  const newsData = useSelector(state => state.news);

  const {searchNews} = newsData

  const dispatch = useDispatch();
  const date = new Date();
  const formattedDate = formatDate(date);

  useEffect(()=>{
    dispatch(fetchSearchNews(`http://api.mediastack.com/v1/news?access_key=${process.env.NEXT_PUBLIC_API_KEY}&countries=in,us&date=${formattedDate}&keywords=${term}`))
  }, [term])
  return (
    <Wrapper className="py-10 w-full">
      <div className="news-content-area flex flex-col">
       <h1 className='capitalize title text-2xl archive-heading'>Search Result for: {term}</h1>
          <div className="flex flex-col-reverse lg:justify-between lg:flex-row  w-full h-ful">
              {/* main news */}
              <NewsList news={searchNews}/>
          </div>
      </div>
    </Wrapper>
  )
}

export default SearchPage;

const Wrapper = styled.div`
.archive-heading {
    font-weight: 600;
    border-left: 3px solid #2962ff;;
    padding-left: 14px;
    line-height: 2;
    letter-spacing: .01em;
    margin-bottom: 20px;
}
`
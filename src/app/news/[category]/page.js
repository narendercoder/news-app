'use client'
import NewsList from '@/app/components/NewsList';
import { useGlobalContext } from '@/app/context/Context';
import React, { useEffect } from 'react';
import { categories } from '@/app/config/categories';
import { styled } from 'styled-components';


const NewsCategory = ({params : {category}}) => {
  const { categoryNews, fetchnews, formattedDate } = useGlobalContext();
  
  useEffect(()=>{
    fetchnews(`http://api.mediastack.com/v1/news?access_key=${process.env.API_KEY}&countries=in&categories=${category}&date=${formattedDate}`)
  }, [category])

  return (
    <Wrapper className="py-10 w-full">
      <div className="news-content-area flex flex-col">
      <h1 className='capitalize heading text-2xl archive-heading'>{category}</h1>
          <div className="flex flex-col-reverse lg:justify-between lg:flex-row  w-full h-ful">
              {/* main news */}
              <NewsList news={categoryNews}/>
          </div>
      </div>
    </Wrapper>
  )
}

export default NewsCategory;

export async function generateStaticPrams(){
  return categories.map((category)=>{category: category.name})
}

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
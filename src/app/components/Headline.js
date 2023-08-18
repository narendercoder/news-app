'use client'
import React from 'react'
import { styled } from 'styled-components';
import { formatDate } from './FormateDate';
import { useRouter } from 'next/navigation';

const Headline = ({article}) => {
    const router = useRouter()
    const handleClick =() =>{
        const queryString = Object.entries(article).map(([key, value])=> `${key}=${value}`).join("&");
        const url = `/article?${queryString}`;
        router.push(url)
      }
  return (
    <Wrapper className='relative border-b mb-5 pb-5 border-gray-200 dark:border-gray-600' onClick={handleClick}>
        <div>
            <div className='content'>
                    <h4 className='title break-words'>
                        <a href="#">
                        {article.title}
                        </a>
                    </h4>
                <div className='date'>
                    {formatDate(article.published_at)}
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Headline;

const Wrapper = styled.div`
.title {
    font-size: 16px;
    margin-bottom: 0;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
}
.date{
    color: #a5a6aa;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: .8px;
    text-transform: uppercase;
    line-height: 1;
    margin-top: 12px;
}
`
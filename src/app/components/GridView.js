import React from "react";
import { styled } from "styled-components";
import {MdDateRange} from "react-icons/md";
import { useRouter } from "next/navigation";
import Badege from "./Badege";
import { unavailable } from "../config/images";

const GridView = ({ article }) => {
   const router = useRouter()
    const date = new Date(article.published_at).toLocaleDateString("en-US");
    const handleClick =() =>{
      const queryString = Object.entries(article).map(([key, value])=> `${key}=${value}`).join("&");
      const url = `/article?${queryString}`;
      router.push(url)
    }
  return (
    <Wrapper className= "relative card mt-5 w-full fadeInUp animated flex justify-center" >
      <div className="card-box w-full  relative flex justify-center  overflow-hidden border-2 border-solid border-white dark:border-gray-600" onClick={handleClick}>
        <div className="relative w-full flex flex-col card-img-holder overflow-hidden shadow-sm transition-all duration-200 ease-out">
          
          <div className="card-img w-full h-56 flex justify-center items-center overflow-hidden">
            <div className="w-full h-full">
              <img
                src={article.image || unavailable}
                alt="img"
                width={480}
                height={504}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="card-content flex-1 flex flex-col cursor-pointer bg-white dark:bg-transparent ">
          <div className="flex-1 flex flex-col p-5">
            <span className="category flex-1 capitalize text-white mb-2">
            <Badege category={article.category} />
          </span>
          <h2 className="title flex-1">
            <div>{article.title}</div>
          </h2>
          <ul className="entry-meta flex flex-1 items-center">
            <li className="post-author mr-4">
                By{" "}
                <span className="text-black dark:text-white">
                {article.author ? article.author : "unknown"}
                </span>
            </li>
            <li className="post-date flex justify-center items-center">
            <MdDateRange className="inline mr-2 text-sm"/>
            {date}
            </li>
          </ul>
          </div>
        </div>
        </div>
     
      </div>
    </Wrapper>
  );
};

export default GridView;

const Wrapper = styled.div`
  .card-box {
    box-shadow: 0 2px 15px -1px rgba(0,0,0,.06);
    &:hover {
      .card-img-holder .card-img img {
        transform: scale3d(1.1, 1.1, 1);
      }
    }
    
    .card-img {
      position: relative;
      box-shadow: 0 2px 6px -1px rgba(7,10,25,.2), 0 6px 12px -6px rgba(7,10,25,.2);
      img {
        border-radius: 4px;
        transform: scale(1.01);
        transition: all 0.85s ease-out;
      }
    }
    .card-content {
      transition: all ease 0.4s;
      .categories {
        margin-bottom: 13px;
        .category-style {
          background-color: #2962ff;
          border-radius: 2px;
          font-size: 12px;
          color: #fff;
          font-weight: 500;
          padding: 6px 9px 5px;
          line-height: 1;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 0;
        }
      }
      .title {
        font-size: 1rem;
        margin-bottom: 5px;
        &:hover{
          color: #D82A50;
        }
      }
      .entry-meta {
        li {
          font-size:  0.7rem;
          font-weight: 500;
          /* margin-right: 16px; */
          position: relative;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #d0d0d0;
        }
      }
    }
  }

@keyframes fadeInUp {
    0% {
    opacity: 0;
    -webkit-transform: translateY(30px);
    -ms-transform: translateY(30px);
    transform: translateY(30px);
}
100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
}
}

`;

import React from "react";
import { styled } from "styled-components";
import { MdDateRange } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import Badege from "./Badege";
import { useRouter } from "next/navigation";
import { unavailable } from "../config/images";

const ListView = ({ article }) => {
  const router = useRouter()
  const date = new Date(article.published_at).toLocaleDateString("en-US");
  const handleClick =() =>{
    const queryString = Object.entries(article).map(([key, value])=> `${key}=${value}`).join("&");
    const url = `/article?${queryString}`;
    router.push(url)
  }
  return (
    <Wrapper className="card mt-5 w-full fadeInUp animated list-view">
      <div className="card-box w-full h-full relative flex justify-center items-center overflow-hidden mb-7 py-7">
        <div className="relative w-full h-full card-img-holder overflow-hidden flex flex-col md:flex-row justify-center">
          <div className="relative card-img w-full h-full flex justify-center items-center overflow-hidden">
            <div>
              <img
                src={article.image || unavailable}
                alt="img"
                width={551}
                height={431}
                loading="lazy"
              />
            </div>
            <Badege/>
          </div>
          <div className="card-content w-full flex flex-col justify-around p-5 bg-white dark:bg-transparent">
            <h3 className="title">
              {article.title}
            </h3>
            <p className="mb-3">{article.content}</p>
            <ul className="entry-meta flex items-center">
              <li className="post-author mr-4">
                By{" "}
                <span className=" text-black dark:text-white">
                  {article.author ? article.author : "unknown"}
                </span>
              </li>
              <li className="post-date flex justify-center items-center">
                <MdDateRange className="inline mr-2 text-sm" />
                {date}
              </li>
            </ul>
            <div className="read-more mt-5" onClick={handleClick}>
              <button className="read-more-btn">
                Read More
                <BsArrowRight className="text-lg ml-2"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ListView;

const Wrapper = styled.div`
  .card-box {
    border-bottom: 1px solid #e5e5e5;
    transition: all ease 0.31s;
    &:hover {
      .card-img-holder .card-img img {
        transform: scale3d(1.1, 1.1, 1);
      }
    }
    .card-img-holder {
      width: 100%;
      border-radius: 4px;
    }

    .card-img {
      max-width: 60%;
      width: 38%;
      max-height: 100%;
      height: 250px;
      margin-right: 1.5rem;
      img {
        height: 100%;
        border-radius: 4px;
        transform: scale(1.01);
        transition: all 0.85s ease-out;
        max-width: max-content;
        object-fit: cover;
      }
      .category-style {
          position: absolute;
          bottom: 0;
          left: 0;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 500;
          padding: 6px 9px 5px;
          line-height: 1;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 0;
        }
    }
    .card-content {
      position: relative;
      z-index: 2;
      transition: all ease 0.4s;
      transform: translateY(0);
      .categories {
        display: inline-block;
        margin-bottom: 13px;
       
      }
      .title {
        font-size: 1.3rem;
        line-height: 1.4;
        margin-bottom: 5px;
      }
      .entry-meta {
        li {
          font-size: 0.75rem;
          font-weight: 500;
          /* margin-right: 16px; */
          position: relative;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #a5a6aa;
        }
      }
      .read-more-btn {
        position: relative;
        background: transparent;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        font-size: 12px;
        color: white;
        font-weight: 700;
        padding: 7px 18px 7px 25px;
        transition: all 0.4s ease;
        display: inline-flex;
        align-items: center;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        background-color: #D82A50;
        transform: perspective(1px) translateZ(0);
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

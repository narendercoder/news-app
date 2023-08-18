'use client'
import React, { useState } from "react";
import { styled } from "styled-components";
import {BiSearch} from "react-icons/bi"
import {useRouter} from "next/navigation"

const SearchBar = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSearch = (e) =>{
    e.preventDefault();
    if(!input) return;
    router.push(`/search/${input}`)
  }
  return (
    <Wrapper className="search">
      <div className="custom-search-input">
        <form onSubmit={(e)=> handleSearch(e)}>
        <div className="input-group border border-solid border-gray-200 dark:border-gray-600 text-gray-400 dark:text-white">
          <input type="text" value={input} placeholder="Search Here ...." onChange={(e)=> setInput(e.target.value)} />
          <button type="submit" className="btn flex justify-center items-center text-center no-underline border-none">
            <BiSearch className="inline"/>
          </button>
        </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  margin-bottom: 40px;
  overflow: hidden;
  position: relative;
  .input-group {
    position: relative;
    margin-bottom: 0;
    padding: 5px;
    border-radius: 4px;
    /* border: 1px solid #e5e5e5; */
    transition: all ease 0.31s;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
    input {
    border: none!important;
    font-size: 14px;
    font-weight: 500;
    border-radius: 0;
    float: left;
    height: 43px;
    padding: 5px 52px 5px 10px;
    width: 100%;
    outline: none;
    background-color: transparent;
    letter-spacing: 1px;
}
.btn{
    font-weight: 400;
    line-height: 1.5;
    vertical-align: middle;
    position: absolute!important;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 43px;
    border-radius: 3px!important;
    /* background-color: #2962ff; */
    background-color: #D82A50;
    color: #fff;
    font-size: 1.5rem;
    transition: all 0.3s ease;
}
  }
`;

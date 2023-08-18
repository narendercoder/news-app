"use client";
import React from "react";
import SearchBar from "./SearchBar";
import { styled } from "styled-components";
import Headlines from "./Headlines";
import Categories from "./Categories";

const Sidebar = () => {
  return (
    <Wrapper className="relative px-6 pt-6 mt-0 mb-5 w-full h-full lg:mb-0 lg:w-1/4 bg-white dark:bg-transparent">
      <div>
        <SearchBar  />
        <Categories />
        <Headlines />
      </div>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  .entry-title {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    line-height: 1.4;
    z-index: 2;
    transition: all ease 0.31s;
    margin-bottom: 1.8rem;
    &:after {
    content: "";
    position: absolute;
    bottom: calc(-1 * 1px);
    left: 0;
    width: 40px;
    height: 3px;
    background-color: #da334a;
}
    h2 {
      font-size: 1.5rem;
    }
    .titledot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      /* background-color: #2962ff; */
      background-color: #D82A50;
      margin-right: 7px;
      margin-left: 15px;
      display: inline-block;
      transition: all ease 0.31s;
    }
    .titleline {
      border: 1px solid #e5e5e5;
      border-width: 1px 0;
      flex-grow: 1;
      height: 4px;
      transition: all ease 0.31s;
    }
  }
`;

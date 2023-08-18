'use client'
import React from "react";
import { categories } from "../config/categories";
import Navlink from "./Navlink";
import {usePathname} from "next/navigation"


const Categories = () => {
 const pathname = usePathname()
 const isActive = (path) =>{
  return pathname?.split('/').pop() === path;
 }
  return (
    <div className="category-list mb-10">
      <div className="">
      <div className="entry-title  pb-5">
            <h2>Top Categories</h2>
            <span className='titledot'></span>
            <span className='titleline'></span>
        </div>
        <ul className="grid w-full gap-2 lg:grid-rows-6 capitalize">
          {
            categories.map((category)=>{
              return  <li className="py-5 border-b border-gray-200 dark:border-gray-600" key={category.name}>
              <div className="flex items-center">
              <Navlink  category={category} isActive={isActive(category.name)}/>
              </div>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Categories;

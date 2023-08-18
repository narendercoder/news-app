'use client'
import React from 'react'
import {useTheme} from "next-themes";
import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeButton = () => {
  const [mounted, setmounted] = useState(false);
  const {systemTheme, theme, setTheme} = useTheme();

  useEffect(()=>{
    setmounted(true);
  }, [])

  if(!mounted){
    return false;
  }
  const currentTheme = theme === "system" ? systemTheme : theme
  
  return <div className='flex justify-center items-center mr-5'>
    {
      currentTheme === "dark" ? (
         <FiSun className="h-8 w-8 cursor-pointer text-red-500" onClick = {()=> setTheme("light")} />
      ): (
        <FiMoon className="h-8 w-8 cursor-pointer text-red-500" onClick = {()=> setTheme("dark")} />
      )

    }
    </div>
}

export default DarkModeButton
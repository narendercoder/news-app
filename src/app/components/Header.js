"use client";
import Link from "next/link";
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment} from "react";
import { CgMenu } from "react-icons/cg";
import { styled } from "styled-components";
import DarkModeButton from "./DarkModeButton";
import { useTheme } from "next-themes";
import {BiChevronDown} from "react-icons/bi"
import { BsFillPersonFill } from "react-icons/bs";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { resolvedTheme } = useTheme();
  const { logout, currentUser } = useAuth()

  return (
    <Wrapper className="header bg-white grid grid-cols-3 px-10 py-5 items-center w-full dark:text-white dark:bg-zinc-900">
      <div className="flex justify-start items-center ">
        <CgMenu className="w-8 h-8 cursor-pointer" />
      </div>
      <div className="flex justify-center items-center">
        <Link href="/" prefetch={false}>
          {resolvedTheme === "light" ? (
            <img src="logo.webp" alt="logo" />
          ) : (
            <img src="logo-Newstime-01-white.webp" alt="logo" />
          )}
        </Link>
      </div>

      <div className="flex items-center justify-end space-x-2">
        {/* Darkmode button */}
        <DarkModeButton />
        {/* subscribe button */}
        <button className="subscribe-btn hidden md:inline text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full ">
          Subscribe now
        </button>

       {
        currentUser ?  <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="menu-button flex justify-center items-center w-full justify-center rounded-md  px-4 py-2 text-sm font-medium ">
                <BsFillPersonFill className=" text-2xl"/>
                <BiChevronDown
              className="ml-2 -mr-1 h-5 w-5"
              aria-hidden="true"
            />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-20 right-0 mt-3 w-40 dark:bg-gray-800   origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1  ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-orange-500 text-white dark:text-white" : "text-gray-900 dark:text-white"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={()=>logout()}
                      >
                        Signout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          : <></>
       }
        
      </div>

      
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  .subscribe-btn {
    background-color: #d82a50;
  }
`;

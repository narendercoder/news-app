import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper
      id="footer"
      className="footer flex justify-center items-center w-screen h-full bg-[#1e1e25] text-white"
    >
      <div className="p-5 min-w-full md:min-w-0 max-w-[1000px]">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5">
          <div className="logo p-5 ">
            <div className="mb-5 ">
              <a href="/">
                <img
                  src="/logo-Newstime-01-white.webp"
                  className="w-40"
                  alt="logo"
                />
              </a>
            </div>
            <div className=" max-w-[15rem]">
            <p className="footer-quote"> We influence 20 million users and is the number one business and technology news network on the planet</p>
            </div>
          </div>

          <div className="flex flex-col p-5 lg:mx-10  md:mx-5">
            <div className="mb-2">
              <h1 className="text-lg font-bold">Useful Link</h1>
            </div>
            <ul className="">
              <li className="mb-2 ">
                <a
                  href={"https://www.instagram.com/artist_narender/"}
                  target="_blank"
                  className=" flex text-sm text-[#d0d0d0]"
                >
                  <span className="link-icon mr-2 mb-0 text-lg flex justify-center items-center ">
                    <AiFillInstagram />
                  </span>
                  <span className="link border-b border-b-transparent ">
                    Instagram
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href={"https://www.linkedin.com/in/narendersinghbisht/"}
                  target="_blank"
                  className=" flex text-sm text-[#d0d0d0]"
                >
                  <span className="link-icon mr-2 text-lg flex justify-center items-center">
                    <AiFillLinkedin />
                  </span>
                  <span className="link border-b border-b-transparent ">
                    Linkedin
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href={"https://github.com/narendercoder"}
                  target="_blank"
                  className="flex text-sm text-[#d0d0d0]"
                >
                  <span className="link-icon mr-2 text-lg flex justify-center items-center ">
                    <AiFillGithub />
                  </span>
                  <span className="link border-b border-b-transparent ">
                    Github
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-3 border-t border-t-white text-xs flex justify-center items-center">
          © 2023 All rights reserved | Designed With 💙 By Narender Singh Bisht
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.section`
  ul li a {
    &:hover .link-icon {
      color: rgb(239 68 68);
    }
    &:hover .link {
      border-bottom-color: rgb(239 68 68);
    }
  }
  .footer-quote:first-letter {
    font-size: 1.2em;
    margin-right: 1px;
    padding: 0 3px;
    background-color: rgb(239 68 68);
}
`;

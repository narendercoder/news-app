import { notFound } from "next/navigation";
import React from "react";
import Sidebar from "../components/Sidebar";
import Badege from "../components/Badege";
import { MdDateRange } from "react-icons/md";
import { unavailable } from "../config/images";
import Link from "next/link";

const ArticlePage = ({ searchParams }) => {
  if (
    (!searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }
  const article = searchParams;

  return (
    <div className="py-10 w-full">
      <div className="news-content-area flex justify-center items-center">
        <div className="flex flex-col-reverse lg:justify-between lg:flex-row  w-full h-ful">
          <div className="relative article w-full lg:w-3/4 px-5">
            <article className="w-full h-full">
              <section>
                <div className="mb-3">
                  <Badege category={article.category} />
                </div>
                <h1 className="text-3xl mb-3">
                  <Link href={article.url} target="_blank" className="hover:underline">
                    {article.title}
                  </Link>
                </h1>
                <ul className="flex items-center flex-wrap mb-4">
                  <li className="mr-3 uppercase">
                    By{" "}
                    <span className="text-black dark:text-white font-bold ">
                      {article.author ? article.author : "unknown"}
                    </span>
                  </li>
                  <li className="flex justify-center items-center">
                    <MdDateRange className="inline mr-2 text-base" />
                    {article.publishedAt}
                  </li>
                </ul>
                <div className="mb-10">
                  {article.image && (
                    <img
                      src={article.image || unavailable}
                      alt="image"
                      className="w-full h-full"
                    />
                  )}
                </div>
                <div className="text-xl text-gray-400 dark:text-gray-300">
                  {article.description && (
                    <div className="w-full h-full">{article.description}</div>
                  )}
                </div>
                 <div className="mt-4 text-xl text-gray-500 dark:text-gray-400">
                  {article.content && (
                    <div className="w-full h-full">{article.content}</div>
                  )}
                </div>
              </section>
            </article>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;

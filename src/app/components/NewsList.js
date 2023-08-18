import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { v4 as uuidv4 } from "uuid";
import { useFilterContext } from "../context/FilterContext";
import { BsGrid, BsList } from "react-icons/bs";
import Sidebar from "./Sidebar";
import { unavailable } from "../config/images";

const NewsList = ({ news }) => {
  const { grid_view, setGridView, setListView } = useFilterContext();

  return (
    <>
      <div className="main-site w-full lg:w-3/4">
       {/* grid-list toggle */}
       <div className="grid-list-toggle lg:px-5 lg:mr-5">
        <div className=" flex justify-end items-center gap-4">
          <button
            className={grid_view ? "sort-btn active" : "sort-btn"}
            onClick={setGridView}
          >
            <BsGrid className="grid-icon" />
          </button>
          <button
            className={!grid_view ? "sort-btn active" : "sort-btn"}
            onClick={setListView}
          >
            <BsList className="list-icon" />
          </button>
        </div>
      </div>
        <main
          className={`"md:m-5 px-5 ${
            grid_view ? "grid md:grid-cols-2 xl:grid-cols-3 md:gap-6" : ""
          } flex-wrap"`}
        >
          {news.map((item) => {
            {
              return grid_view ? (
                <GridView
                  key={`${uuidv4()}`}
                  article={item}
                />
              ) : (
                <ListView
                  key={`${uuidv4()}`}
                  article={item}
                />
              );
            }
          })}
        </main>
      </div>

      <Sidebar />
    </>
  );
};

export default NewsList;


import React from "react";
import { categories } from "../config/categories";

const Badege = ({category}) => {
  return (
    <div>
      {categories.map((item) => {
        return item.name === category ? (
          <span
            key={category}
            className={`category-style ${item.color}`}
          >
            {category}
          </span>
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default Badege;

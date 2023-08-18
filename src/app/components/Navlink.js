import Link from "next/link";
import React from "react";

const Navlink = ({ category, isActive }) => {
  return (
    <>
      <span><category.icon className="text-xl mr-2 md:mr-0" /></span>
      <Link
        href={`/news/${category.name}`}
        className={`nav-link text-base  ${  isActive && "underline decoration-blue-500 underline-offset-4 font-bold text-md"  }`}
      >
        {category.name}
      </Link>
    </>
  );
};

export default Navlink;

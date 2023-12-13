import React from "react";
import "./searchFc.css";
import { IoMdSearch } from "react-icons/io";
const SearchFc = () => {
  return (
    <section className="searchFc">
      <IoMdSearch fontSize={20} />
      <input type="text" placeholder="Search here..." className="searchInput" />
    </section>
  );
};

export default SearchFc;

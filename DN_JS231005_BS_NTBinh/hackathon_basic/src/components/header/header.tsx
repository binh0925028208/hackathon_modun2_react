import React from "react";
import "./header.css";
import { MdModeNight } from "react-icons/md";
const Header = () => {
  return (
    <section className="header">
      <div className="headerBox">
        <h1>Reviews English Mr.Jack</h1>
        <button className="changeThemeBtn">
          <MdModeNight />
        </button>
      </div>
    </section>
  );
};

export default Header;

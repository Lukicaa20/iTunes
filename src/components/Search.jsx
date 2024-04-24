import React, { useState } from "react";
import { FaApple } from "react-icons/fa";

const Search = ({ handleChange }) => {
  return (
    <div className="search">
      <div className="container">
        <h1>AjTjuns</h1>
        <FaApple />
      </div>
      <input className="input" type="text" onChange={handleChange} />
    </div>
  );
};

export default Search;

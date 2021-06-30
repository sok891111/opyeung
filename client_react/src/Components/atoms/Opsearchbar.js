import React,{useState} from "react";

import "./Opsearchbar.css";


export default function Searchbar(props) {
    const [searchValue, setsearchValue] = useState(props.searchValue);
  return (
    <div className="searchbar-container">
      <input
        onChange={(e) => {
            setsearchValue(e.target.value);
        }}
        id="searchbar"
      />
      {searchValue === "" && (
        <div
          onClick={(e) => {
            document.getElementById("searchbar")?.focus();
          }}
          className="searchbar-placeholder"
        >
          <span>Search</span>
        </div>
      )}
    </div>
  );
}
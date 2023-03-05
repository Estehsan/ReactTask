import React from "react";

const SearchBar = () => {
  return (
    <form className="SearchMain">
      <input
        name="search"
        className="SearchInput"
        type="text"
        placeholder="Search"
      />
      <button type="submit" className="SearchButton">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

import React from "react";

interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  search,
  setSearch,
  onClick,
}) => {
  return (
    <form className="SearchMain">
      <input
        className="SearchInput"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={onClick} type="submit" className="SearchButton">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

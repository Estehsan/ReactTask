import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Header = (
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  onClick: () => void
) => {
  return (
    <div className="headerMain">
      <div className="headerInner">
        <Link to="/">
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}>
            <img
              src="https://static.tvmaze.com/images/tvm-header-logo.png"
              alt="logo"
              style={{
                width: "160px",
                objectFit: "contain",
                padding: "15px 0",
              }}
            />
          </div>
        </Link>

        <div
          style={{
            flex: 2,
          }}>
          <SearchBar onClick={onClick} search={search} setSearch={setSearch} />
        </div>
      </div>
    </div>
  );
};

export default Header;

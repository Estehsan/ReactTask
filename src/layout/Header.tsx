import React from "react";
import SearchBar from "../components/SearchBar";

const Header = () => {
  return (
    <div className="headerMain">
      <div className="headerInner">
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
              width: "100px",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            flex: 2,
          }}>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import SearchBar from "../components/SearchBar";

const Header = () => {
  return (
    <div className="headerMain">
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
        }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}>
          <h1>LOGO</h1>
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

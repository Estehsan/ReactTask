import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

interface HeaderProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ search, setSearch, onClick }) => {
  return (
    <div className="headerMain">
      <div className="headerInner">
        <Link to="/">
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <img
              src="https://static.tvmaze.com/images/tvm-header-logo.png"
              alt="logo"
              style={{
                width: "160px",
                objectFit: "contain",
                padding: "15px",
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

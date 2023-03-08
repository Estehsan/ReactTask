import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "./Header.css";
const Header: React.FC = () =>
  // {
  //   // search, setSearch, onClick
  // }
  {
    const location = useLocation();

    return (
      <>
        {location.pathname === "/" ? (
          <>
            <HeaderAll />
            <Outlet />
          </>
        ) : (
          <>
            <HeaderAll />
          </>
        )}
      </>
    );
  };

const HeaderAll: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState<string>("");
  const location = useLocation();

  const onClick = () => {
    navigate("/search", {
      state: {
        search: search,
      },
    });
  };

  return (
    <div className="headerMain">
      <div className={location.pathname === "/" ? "homeCenter" : "headerInner"}>
        <Link to="/">
          <div className="LogoContainer">
            <img
              src="https://static.tvmaze.com/images/tvm-header-logo.png"
              alt="logo"
              className="logoStyle"
            />
          </div>
        </Link>

        <div className="searchBarContainer">
          <SearchBar onClick={onClick} search={search} setSearch={setSearch} />
        </div>
      </div>
    </div>
  );
};

export default Header;

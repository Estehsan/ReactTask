import React from "react";
import SearchBar from "../../components/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [search, setSearch] = React.useState("");
  console.log(search);

  const onClick = () => {
    navigate("/search", {
      state: {
        search: search,
      },
    });
  };

  return (
    <div className="Main">
      <div className="CenterAlign">
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
              height: "305px",
              width: "253px",
              objectFit: "contain",
            }}
          />
        </div>
        <SearchBar onClick={onClick} search={search} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default Home;

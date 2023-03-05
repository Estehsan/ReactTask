import React from "react";
import SearchBar from "../../components/SearchBar";
// import logo from "../../assets/logo.png";

// import type for image files

const Home: React.FC = () => {
  return (
    <div className="Main">
      <div className="CenterAlign">
        {/* <img src={logo} alt="logo" /> */}
        <div>
          <img
            src="https://static.tvmaze.com/images/tvm-header-logo.png"
            alt="logo"
            style={{
              height: "305px",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Home;

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
          <h1>Logo</h1>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Home;

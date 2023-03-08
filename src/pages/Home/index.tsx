import React from "react";
import SearchBar from "../../components/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";

const Home = () => {
  const navigate = useNavigate();

  const [search, setSearch] = React.useState("");
  console.log(search);

  return <div className="Main"></div>;
};

export default Home;

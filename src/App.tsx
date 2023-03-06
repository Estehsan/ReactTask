import React from "react";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import Detail from "./pages/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}

      <Routes>
        {
          // dont show header in Home
        }
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

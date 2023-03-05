import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../layout/Header";
const Detail = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <h1>sad{id}</h1>
    </div>
  );
};

export default Detail;

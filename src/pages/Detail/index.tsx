import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../../layout/Header";

interface DetailProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Detail: React.FC<DetailProps> = () => {
  // const [search, setSearch] = React.useState("");

  const { id } = useParams();

  const location = useLocation();

  return (
    <div>
      {/* <Header search={search} setSearch={setSearch} /> */}
      <h1>
        {location.state.title}
        {id}
      </h1>
    </div>
  );
};

export default Detail;

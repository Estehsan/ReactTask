import React from "react";
import ListView from "../../components/ListView";
import Header from "../../layout/Header";
import { useLocation } from "react-router-dom";
import axios from "axios";

// interface SearchProps {
//   search: string;
//   setSearch: React.Dispatch<React.SetStateAction<string>>;
// }

const SearchResult: React.FC = () => {
  const location = useLocation();
  const [search, setSearch] = React.useState("");
  const [list, setList] = React.useState([]);

  const [loading, setLoading] = React.useState(false);

  const onClick = () => {
    console.log("clicked");
  };

  const getApi = async () => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${location.state.search}`
      );
      setList(response.data);
      console.log(list);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    setLoading(true);
    getApi();
    setLoading(false);
  }, [location.state.search]);

  return (
    <div>
      {/* <Header search={search} setSearch={setSearch} onClick={onClick} /> */}

      <div className="container">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          list.map((data, index) => {
            return <ListView key={index} data={data} />;
          })
        )}
      </div>
    </div>
  );
};

export default SearchResult;

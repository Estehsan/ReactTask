import React from "react";
import ListView from "../../components/ListView";
import Header from "../../layout/Header";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SearchResult.css";
// interface SearchProps {
//   search: string;
//   setSearch: React.Dispatch<React.SetStateAction<string>>;
// }

const SearchResult: React.FC = () => {
  const location = useLocation();

  const [search, setSearch] = React.useState("");
  const [list, setList] = React.useState([]);

  const [loading, setLoading] = React.useState(false);

  const getApi = async () => {
    console.log("location arhi ha ? ", location.state.search);
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${location.state.search}`
      );

      setList(response.data);
      setSearch(
        location.state.search === undefined ? [] : location.state.search
      );

      console.log(list);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    setLoading(true);
    getApi();

    // get the data of animals
    setLoading(false);
  }, [location.state.search]);

  return (
    <div>
      <div className="container">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          list.map((data, index) => {
            return <ListView search={search} key={index} data={data} />;
          })
        )}
      </div>
    </div>
  );
};

export default SearchResult;

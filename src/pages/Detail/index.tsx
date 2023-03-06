import axios from "axios";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import Header from "../../layout/Header";
import { getShowById } from "../../routes/api";

const Detail: React.FC = () => {
  const [search, setSearch] = React.useState("");
  const [details, setDetails] = React.useState<any>([]);
  const [crew, setCrew] = React.useState<any>([]);
  const location = useLocation();

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/search", {
      state: {
        search: search,
      },
    });
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/${location.state.id}`
      );
      const crewData = await axios.get(
        `https://api.tvmaze.com/shows/${location.state.id}/cast`
      );

      console.log(response.data);
      console.log(crewData.data);
      setCrew(crewData.data);
      setDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <Header onClick={onClick} search={search} setSearch={setSearch} />

      <div
        onClick={() => {
          window.history.back();
        }}
        style={{
          backgroundColor: "#000",
          marginLeft: "10px",
          marginTop: "10px",
          marginRight: "10px",
          paddingLeft: "10px",
          paddingRight: "10px",
          flex: 1,
          display: "flex",
          padding: "10px",
        }}>
        <h2>👈 Back to Search Result</h2>
      </div>

      <div className="detailmain">
        <div className="leftBox">
          <img
            src={details.image?.medium}
            alt="Avatar"
            style={{
              height: "360px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="rightBox">
          <h1>{details.name}</h1>
          <h2>
            Genres:
            {details.genres?.map((data: any, index: any) => {
              return <span key={index}> {data} </span>;
            })}
          </h2>
          <p>{details.summary}</p>

          <div>
            <h1>Cast</h1>

            {/* two crews in one row */}

            {crew.map((data: any, index: any) => {
              return (
                <div
                  style={{
                    display: "flex",
                  }}
                  key={index}>
                  <img
                    src={data.person.image?.medium}
                    alt="Avatar"
                    style={{
                      height: "100px",
                      width: "100px",
                      padding: "10px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h2>{data.person.name}</h2>
                    <span>as {data.character.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

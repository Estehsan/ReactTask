import axios from "axios";
import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import Header from "../../layout/Header";
import { getShowById } from "../../routes/api";
import "./Detail.css";

const Detail: React.FC = () => {
  const [search, setSearch] = React.useState("");
  const [details, setDetails] = React.useState<any>([]);
  const [crew, setCrew] = React.useState<any>([]);
  const location = useLocation();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/${location.state.id}`
      );
      const crewData = await axios.get(
        `https://api.tvmaze.com/shows/${location.state.id}/cast`
      );

      console.log(response.data);
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
    <div>
      <div className="BackContainer">
        <a
          className="decoration"
          href="#"
          onClick={() => {
            window.history.back();
          }}>
          <h2>👈 Back to Search Result</h2>
        </a>
      </div>

      <div className="detailMain">
        <div className="leftBox">
          <img
            src={
              details.image?.medium
                ? details.image?.medium
                : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
            }
            alt="Avatar"
            className="moviePoster"
          />
        </div>
        <div className="rightBox">
          <h1>{details.name}</h1>
          <p>
            <b>Rating : </b>
            {details.rating?.average
              ? details.rating?.average
              : "Not Available"}
          </p>
          <h2>
            Genres:
            {details.genres?.map((data: any, index: any) => {
              return <span key={index}> {data} | </span>;
            })}
          </h2>
          <p>{details.summary?.replace(/(<([^>]+)>)/gi, "")}</p>

          <div>
            <h1>Cast</h1>
            {crew.length === 0 ? (
              <p>No Cast Available</p>
            ) : (
              crew.map((data: any, index: any) => {
                return (
                  <div>
                    <div className="crewContainer" key={index}>
                      <img
                        src={
                          data.person.image?.medium
                            ? data.person.image?.medium
                            : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                        }
                        alt="Avatar"
                        className="crewImage"
                      />
                      <div>
                        <h2>{data.person.name}</h2>
                        <span>as {data.character.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

import React from "react";
import { useNavigate } from "react-router-dom";

interface ListViewProps {
  data: any;
  key: any;
}

const ListView: React.FC<ListViewProps> = ({ data, key }) => {
  const navigate = useNavigate();

  return (
    <div
      key={key}
      onClick={() => {
        navigate(`/movie/${data.show.id}`, {
          state: {
            title: data.show.name,
          },
        });
      }}
      className="column">
      <img
        src={
          data.show.image
            ? data.show.image.medium
            : "https://via.placeholder.com/210x295?text=No+Image"
        }
        alt="Avatar"
        style={{
          height: "305px",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <h2>{data.show.name}</h2>
      {/* <h2>{data.rating.average}</h2> */}
    </div>
  );
};

export default ListView;

import React from "react";
import { useNavigate } from "react-router-dom";

interface ListViewProps {
  data: any;
  key: any;
  search: string;
}

const ListView: React.FC<ListViewProps> = ({ data, key, search }) => {
  const navigate = useNavigate();

  return (
    <div
      key={key}
      onClick={() => {
        navigate(`/movie/${data.show.id}`, {
          state: {
            id: data.show.id,
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
    </div>
  );
};

export default ListView;

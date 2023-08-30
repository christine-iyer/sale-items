import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀🌀</h2>
      </div>
    );
  }

  const item = results.data.item[0];

  return (
    <div className="details">
      <div>
        <h1>{item.location}</h1>
        <h2>{`${item.animal} — ${item.breed} `}</h2>
        <button>Adopt {item.id}</button>
       
      </div>
    </div>
  );
};

export default Details;
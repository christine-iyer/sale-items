import { Link } from "react-router-dom";

const Pet = (props) => {
  const { id, breed, animal,location,unitsAvailable, unitCost,cost, recipe, image } = props;

  // let hero = "http://pets-recipe.dev-apis.com/pets/none.jpg";
  // if (recipe.length) {
  //   hero = recipe[0];
  // }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={image} alt={cost} /> 
      </div>
      <div className="info">
        <h1>{cost}</h1>
        <h2>{`${animal} — ${breed} — ${location}— ${recipe}`}</h2>
        <h2>{`${cost} — ${unitCost} — ${unitsAvailable}— ${id}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
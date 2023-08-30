import { Link } from "react-router-dom";

const Pet = (props) => {
  const { cost, animal, breed, location, id, recipe } = props;

  // let hero = "http://pets-recipe.dev-apis.com/pets/none.jpg";
  // if (recipe.length) {
  //   hero = recipe[0];
  // }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        {/* <img src={hero} alt={cost} /> */}
      </div>
      <div className="info">
        <h1>{cost}</h1>
        <h2>{`${animal} — ${breed} — ${location}— ${recipe}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
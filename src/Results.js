import Pet from "./Pet";

const Results = ({ items }) => {
  return (
    <div className="search">
      {!items.length ? (
        <h1>No Pets Found</h1>
      ) : (
        items.map((item) => {
          return (
            <Pet
              animal={item.animal}
              key={item.id}
              breed={item.breed}
              image={item.image}
              location={item.location}
              unitsAvailable={item.unitsAvailable}
              unitCost={item.unitCost}
              cost={item.cost}
              recipe={item.recipe}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
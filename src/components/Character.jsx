import Selector from "./Selector";

const Character = ({ id, name, image, unitValue, totalCount }) => {
  const requiredUnits = (1 / unitValue).toFixed(0);

  return (
    <div className=" flex justify-between items-center gap-4 sm:gap-9">
      <img src={image} alt={name} className="w-9 h-9" />
      <div>{`${name} (${requiredUnits} no = 1 unit)`}</div>
      <div>
        <Selector characterId={id} totalCount={totalCount} />
      </div>
    </div>
  );
};

export default Character;

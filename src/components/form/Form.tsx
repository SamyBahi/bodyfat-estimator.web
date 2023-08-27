import EstimateButton from "./EstimateButton";
import General from "./General";
import Lower from "./Lower";
import Units from "./Units";
import Upper from "./Upper";

const Form = () => {
  return (
    <form
      action=""
      className="w-full grid grid-cols-1 gap-3 md:grid-cols-3 max-w-7xl"
    >
      <Units />
      <General />
      <Upper />
      <Lower />
      <EstimateButton />
    </form>
  );
};

export default Form;

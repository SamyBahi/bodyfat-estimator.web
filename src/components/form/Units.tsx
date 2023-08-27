import FormCard from "./FormCard";
import Switch from "./Switch";

const Units = () => {
  return (
    <div>
      <FormCard title="Units">
        <div className="flex w-full space-x-3">
          <Switch first="lbs" second="kg" />
          <Switch first="in." second="cm" />
        </div>
      </FormCard>
    </div>
  );
};

export default Units;

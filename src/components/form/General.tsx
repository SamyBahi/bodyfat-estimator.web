import { useDispatch } from "react-redux";
import FormCard from "./FormCard";
import { setAge, setHeight, setWeight } from "@/store/inputSlice";

const General = () => {
  const dispatch = useDispatch();

  return (
    <div className="md:col-span-2">
      <FormCard title="General Information">
        <div className="md:flex md:space-x-3">
          <div className="flex h-10 w-fullitems-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow md:w-1/3">
            <input
              type="number"
              min={1}
              max={100}
              placeholder="Age"
              className="remove-arrow w-full bg-transparent focus:outline-none"
              aria-label="Age"
              onChange={(e) => {
                dispatch(setAge(+e.target.value));
              }}
            />
          </div>
          <div className="flex space-x-3 w-full">
            <div className="flex h-10 w-1/2  items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow md:w-full">
              <input
                type="number"
                min={1}
                placeholder="Height"
                className="remove-arrow w-full bg-transparent focus:outline-none"
                aria-label="Height"
                onChange={(e) => {
                  dispatch(setHeight(+e.target.value));
                }}
              />
            </div>
            <div className="flex h-10 w-1/2 items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow md:w-full">
              <input
                type="number"
                min={1}
                placeholder="Weight"
                className="remove-arrow w-full bg-transparent focus:outline-none"
                aria-label="Weight"
                onChange={(e) => {
                  dispatch(setWeight(+e.target.value));
                }}
              />
            </div>
          </div>
        </div>
      </FormCard>
    </div>
  );
};

export default General;

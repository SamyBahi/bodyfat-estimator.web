import { useDispatch } from "react-redux";
import FormCard from "./FormCard";
import { setAnkle, setKnee, setThigh } from "@/store/inputSlice";

const Lower = () => {
  const dispatch = useDispatch();

  return (
    <div className="md:col-span-1 md:row-span-2">
      <FormCard title="Lower Body">
        <div>
          <div className="flex h-10 w-full items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
            <input
              type="number"
              min={1}
              step={0.1}
              placeholder="Thigh"
              className="remove-arrow w-full bg-transparent focus:outline-none"
              aria-label="Thigh"
              onChange={(e) => {
                dispatch(setThigh(+e.target.value));
              }}
            />
          </div>
          <div className="flex space-x-3">
            <div className="flex h-10 w-1/2 items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
              <input
                type="number"
                min={1}
                step={0.1}
                placeholder="Knee"
                className="remove-arrow w-full bg-transparent focus:outline-none"
                aria-label="Knee"
                onChange={(e) => {
                  dispatch(setKnee(+e.target.value));
                }}
              />
            </div>
            <div className="flex h-10 w-1/2 items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
              <input
                type="number"
                min={1}
                step={0.1}
                placeholder="Ankle"
                className="remove-arrow w-full bg-transparent focus:outline-none"
                aria-label="Ankle"
                onChange={(e) => {
                  dispatch(setAnkle(+e.target.value));
                }}
              />
            </div>
          </div>
        </div>
      </FormCard>
    </div>
  );
};

export default Lower;

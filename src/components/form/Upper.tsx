import { useDispatch } from "react-redux";
import FormCard from "./FormCard";
import {
  setBiceps,
  setChest,
  setForearm,
  setNeck,
  setWaist,
  setWrist,
} from "@/store/inputSlice";

const Upper = () => {
  const dispatch = useDispatch();

  return (
    <div className="md:col-span-2 md:row-span-2">
      <FormCard title="Upper Body">
        <div>
          <div className="flex h-10 w-full items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
            <input
              type="number"
              min={1}
              step={0.1}
              placeholder="Neck"
              className="remove-arrow w-full bg-transparent focus:outline-none"
              aria-label="Neck"
              onChange={(e) => {
                dispatch(setNeck(+e.target.value));
              }}
            />
          </div>
          <div className="flex space-x-3">
            <div className="flex h-10 w-1/2 items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
              <input
                type="number"
                min={1}
                step={0.1}
                placeholder="Chest"
                className="remove-arrow w-full bg-transparent focus:outline-none"
                aria-label="Chest"
                onChange={(e) => {
                  dispatch(setChest(+e.target.value));
                }}
              />
            </div>
            <div className="flex h-10 w-1/2 items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
              <input
                type="number"
                min={1}
                step={0.1}
                placeholder="Waist"
                className="remove-arrow w-full bg-transparent focus:outline-none"
                aria-label="Waist"
                onChange={(e) => {
                  dispatch(setWaist(+e.target.value));
                }}
              />
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="flex h-10 w-1/2 items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
              <input
                type="number"
                min={1}
                step={0.1}
                placeholder="Biceps"
                className="remove-arrow w-full bg-transparent focus:outline-none"
                aria-label="Biceps"
                onChange={(e) => {
                  dispatch(setBiceps(+e.target.value));
                }}
              />
            </div>
            <div className="flex h-10 w-1/2 items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
              <input
                type="number"
                min={1}
                step={0.1}
                placeholder="Forearm"
                className="remove-arrow w-full bg-transparent focus:outline-none"
                aria-label="Forearm"
                onChange={(e) => {
                  dispatch(setForearm(+e.target.value));
                }}
              />
            </div>
            <div className="flex h-10 w-1/2 items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
              <input
                type="number"
                min={1}
                step={0.1}
                placeholder="Wrist"
                className="remove-arrow w-full bg-transparent focus:outline-none"
                aria-label="Wrist"
                onChange={(e) => {
                  dispatch(setWrist(+e.target.value));
                }}
              />
            </div>
          </div>
        </div>
      </FormCard>
    </div>
  );
};

export default Upper;

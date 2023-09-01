"use client";
import FormCard from "./FormCard";
import { useDispatch, useSelector } from "react-redux";
import { setFemale, setInches, setLbs } from "@/store/unitsSlice";

const Units = () => {
  const dispatch = useDispatch();
  const inches = useSelector((state: any) => state.units.inches);
  const lbs = useSelector((state: any) => state.units.lbs);
  const female = useSelector((state: any) => state.units.female);

  const active = "bg-secondary/20";

  const lbsClickHandler = () => {
    dispatch(setLbs(true));
  };
  const kgClickHandler = () => {
    dispatch(setLbs(false));
  };
  const inClickHandler = () => {
    dispatch(setInches(true));
  };
  const cmClickHandler = () => {
    dispatch(setInches(false));
  };
  const maleClickHandler = () => {
    dispatch(setFemale(false));
  };
  const femaleClickHandler = () => {
    dispatch(setFemale(true));
  };

  return (
    <div>
      <FormCard title="Units">
        <div className="flex w-full space-x-3">
          <div className="flex h-10 w-28 items-center border border-secondary/20 rounded-md mt-3 p-0.5">
            <div
              className={`flex basis-1/2 justify-center hover:cursor-pointer h-full items-center rounded-md ${
                lbs ? active : ""
              } transition-all`}
              onClick={lbsClickHandler}
            >
              lbs
            </div>
            <div
              className={`flex basis-1/2 justify-center hover:cursor-pointer h-full items-center rounded-md ${
                lbs ? "" : active
              } transition-all`}
              onClick={kgClickHandler}
            >
              kg
            </div>
          </div>
          <div className="flex h-10 w-28 items-center border border-secondary/20 rounded-md mt-3 p-0.5">
            <div
              className={`flex basis-1/2 justify-center hover:cursor-pointer h-full items-center rounded-md ${
                inches ? active : ""
              } transition-all`}
              onClick={inClickHandler}
            >
              in.
            </div>
            <div
              className={`flex basis-1/2 justify-center hover:cursor-pointer h-full items-center rounded-md ${
                inches ? "" : active
              } transition-all`}
              onClick={cmClickHandler}
            >
              cm
            </div>
          </div>
          <div className="flex h-10 w-52 items-center border border-secondary/20 rounded-md mt-3 p-0.5">
            <div
              className={`flex basis-1/2 justify-center hover:cursor-pointer h-full items-center rounded-md ${
                female ? "" : active
              } transition-all`}
              onClick={maleClickHandler}
            >
              Male
            </div>
            <div
              className={`flex basis-1/2 justify-center hover:cursor-pointer h-full items-center rounded-md ${
                female ? active : ""
              } transition-all`}
              onClick={femaleClickHandler}
            >
              Female
            </div>
          </div>
        </div>
      </FormCard>
    </div>
  );
};

export default Units;

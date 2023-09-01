"use client";
import { SyntheticEvent, useState } from "react";
import EstimateButton from "./EstimateButton";
import General from "./General";
import Lower from "./Lower";
import Units from "./Units";
import Upper from "./Upper";
import { useSelector } from "react-redux";
import { inputState } from "@/store/inputSlice";
import { unitsState } from "@/store/unitsSlice";
import { RootState } from "@/store";
import axios from "axios";
import { toast } from "react-toastify";
import Result from "./Result";

const Form = () => {
  const inputState: inputState = useSelector((state: RootState) => state.input);
  const unitsState: unitsState = useSelector((state: RootState) => state.units);
  const female = useSelector((state: any) => state.units.female);
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  const formSubmitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const inputs: any = { ...inputState };

      for (const input in inputs) {
        if (inputs[input][0] === 0 || inputs[input].length != 1) {
          throw new Error("Invalid input");
        }
      }

      setLoading(true);

      if (unitsState.inches) {
        for (const input in inputs) {
          if (input !== "Age" && input !== "Height" && input !== "Weight") {
            inputs[input] = [inputs[input] * 2.54];
          }
        }
      } else {
        inputs["Height"] = [inputs["Height"] / 2.54];
      }

      !unitsState.lbs ? (inputs["Weight"] = [inputs["Weight"] * 2.205]) : "";

      const res = await axios.post(
        "https://api.samybahi.com/bf/predict",
        inputs
      );

      female
        ? setResult(res.data["prediction"] + 10)
        : setResult(res.data["prediction"]);

      setLoading(false);
    } catch (err: any) {
      if (err.response) {
        toast.error(err.response.data.error);
        setLoading(false);
      } else {
        toast.error(err.message);
        setLoading(false);
      }
    }
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      className="w-full grid grid-cols-1 gap-3 md:grid-cols-3 max-w-7xl"
    >
      <Units />
      <General />
      <Upper />
      <Lower />
      <EstimateButton loading={loading} />
      {result && (
        <h1 className="text-6xl md:col-span-3 text-center mt-10 flex justify-center">
          <Result n={result} />%
        </h1>
      )}
    </form>
  );
};

export default Form;

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

const Form = () => {
  const inputState: inputState = useSelector((state: RootState) => state.input);
  const unitsState: unitsState = useSelector((state: RootState) => state.units);
  const [result, setResult] = useState();

  const formSubmitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    const inputs: any = { ...inputState };

    for (const input in inputs) {
      if (inputs[input][0] === 0 || inputs[input].length != 1) {
        console.log("erreur");
        return;
      }
    }

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
      process.env.NEXT_PUBLIC_API_URL + "/predict",
      inputs
    );

    setResult(res.data["prediction"]);
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
      <EstimateButton />
      <h1>{result}</h1>
    </form>
  );
};

export default Form;

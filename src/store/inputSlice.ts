import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NumberLiteralType } from "typescript";

export interface inputState {
  Age: [number] | [];
  Height: [number] | [];
  Weight: [number] | [];
  Abdomen: [number] | [];
  Neck: [number] | [];
  Chest: [number] | [];
  Thigh: [number] | [];
  Biceps: [number] | [];
  Forearm: [number] | [];
  Wrist: [number] | [];
  Ankle: [number] | [];
  Knee: [number] | [];
}

const initialState: inputState = {
  Age: [],
  Height: [],
  Weight: [],
  Abdomen: [],
  Neck: [],
  Chest: [],
  Thigh: [],
  Biceps: [],
  Forearm: [],
  Wrist: [],
  Ankle: [],
  Knee: [],
};

const inputSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    setAge: (state, action: PayloadAction<number>) => {
      state.Age = [action.payload];
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.Height = [action.payload];
    },
    setWeight: (state, action: PayloadAction<number>) => {
      state.Weight = [action.payload];
    },
    setNeck: (state, action: PayloadAction<number>) => {
      state.Neck = [action.payload];
    },
    setChest: (state, action: PayloadAction<number>) => {
      state.Chest = [action.payload];
    },
    setWaist: (state, action: PayloadAction<number>) => {
      state.Abdomen = [action.payload];
    },
    setBiceps: (state, action: PayloadAction<number>) => {
      state.Biceps = [action.payload];
    },
    setForearm: (state, action: PayloadAction<number>) => {
      state.Forearm = [action.payload];
    },
    setWrist: (state, action: PayloadAction<number>) => {
      state.Wrist = [action.payload];
    },
    setThigh: (state, action: PayloadAction<number>) => {
      state.Thigh = [action.payload];
    },
    setKnee: (state, action: PayloadAction<number>) => {
      state.Knee = [action.payload];
    },
    setAnkle: (state, action: PayloadAction<number>) => {
      state.Ankle = [action.payload];
    },
  },
});

export const {
  setAge,
  setHeight,
  setWeight,
  setNeck,
  setChest,
  setWaist,
  setBiceps,
  setForearm,
  setWrist,
  setThigh,
  setKnee,
  setAnkle,
} = inputSlice.actions;
export default inputSlice.reducer;

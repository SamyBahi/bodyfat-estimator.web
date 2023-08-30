import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NumberLiteralType } from "typescript";

export interface inputState {
  Age: number | null;
  Height: number | null;
  Weight: number | null;
  Abdomen: number | null;
  Neck: number | null;
  Chest: number | null;
  Thigh: number | null;
  Biceps: number | null;
  Forearm: number | null;
  Wrist: number | null;
  Ankle: number | null;
  Knee: number | null;
}

const initialState: inputState = {
  Age: null,
  Height: null,
  Weight: null,
  Neck: null,
  Chest: null,
  Abdomen: null,
  Biceps: null,
  Forearm: null,
  Wrist: null,
  Thigh: null,
  Knee: null,
  Ankle: null,
};

const inputSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    setAge: (state, action: PayloadAction<number>) => {
      state.Age = action.payload;
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.Height = action.payload;
    },
    setWeight: (state, action: PayloadAction<number>) => {
      state.Weight = action.payload;
    },
    setNeck: (state, action: PayloadAction<number>) => {
      state.Neck = action.payload;
    },
    setChest: (state, action: PayloadAction<number>) => {
      state.Chest = action.payload;
    },
    setWaist: (state, action: PayloadAction<number>) => {
      state.Abdomen = action.payload;
    },
    setBiceps: (state, action: PayloadAction<number>) => {
      state.Biceps = action.payload;
    },
    setForearm: (state, action: PayloadAction<number>) => {
      state.Forearm = action.payload;
    },
    setWrist: (state, action: PayloadAction<number>) => {
      state.Wrist = action.payload;
    },
    setThigh: (state, action: PayloadAction<number>) => {
      state.Thigh = action.payload;
    },
    setKnee: (state, action: PayloadAction<number>) => {
      state.Knee = action.payload;
    },
    setAnkle: (state, action: PayloadAction<number>) => {
      state.Ankle = action.payload;
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

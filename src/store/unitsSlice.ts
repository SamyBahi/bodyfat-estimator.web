import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface unitsState {
  lbs: boolean;
  inches: boolean;
  female: boolean;
}

const initialState: unitsState = {
  lbs: true,
  inches: true,
  female: false,
};

const unitsSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    setLbs: (state, action: PayloadAction<boolean>) => {
      state.lbs = action.payload;
    },
    setInches: (state, action: PayloadAction<boolean>) => {
      state.inches = action.payload;
    },
    setFemale: (state, action: PayloadAction<boolean>) => {
      state.female = action.payload;
    },
  },
});

export const { setLbs, setInches, setFemale } = unitsSlice.actions;
export default unitsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
const rightPanelSlice = createSlice({
  name: "showRightPanel",
  initialState,
  reducers: {
    toggleState(state, action) {
      return !state;
    },
  },
});

export const toggleRight = () => {
  return async (dispatch) => {
    console.log("sdfghjkl");
    dispatch(toggleState());
  };
};

export const { toggleState } = rightPanelSlice.actions;
export default rightPanelSlice.reducer;

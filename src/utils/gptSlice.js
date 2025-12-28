import { createSlice } from "@reduxjs/toolkit";

const gptSlica = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },

  reducers: {
    showGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { showGptSearch } = gptSlica.actions;
export default gptSlica.reducer;

import { createSlice } from "@reduxjs/toolkit";

const gptSlica = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    searchoviesResults: [],
  },

  reducers: {
    showGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSerchMoviesResults: (state, action) => {
      state.searchoviesResults = action.payload;
    },
  },
});

export const { showGptSearch, addSerchMoviesResults } = gptSlica.actions;
export default gptSlica.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allJobs: [],
  searchedQuery: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setAllJobs(state, action) {
      state.allJobs = action.payload;
    },
    setSearchedQuery(state, action) {
      state.searchedQuery = action.payload;
    },
  },
});

export const { setAllJobs, setSearchedQuery } = jobSlice.actions;
export default jobSlice.reducer;

const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filter: '',
  },
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
      return state;
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

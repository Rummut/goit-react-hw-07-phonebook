import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});

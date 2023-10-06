import { fetchContacts, addContact, deleteContact } from './operations';
const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const handleFulfilledFetch = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = action.payload;
};

const handleFulfilledAddContact = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items.push(action.payload);
};

const handleFulfilledDeleteContact = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  const index = state.contacts.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.contacts.items.splice(index, 1);
};
const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleFulfilledAddContact)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleFulfilledDeleteContact)
      .addCase(deleteContact.rejected, handleRejected),
});
export const contactReducer = contactSlice.reducer;

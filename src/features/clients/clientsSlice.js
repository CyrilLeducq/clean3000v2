import { createSlice } from '@reduxjs/toolkit';

const defaultClients = [
  { id: 1, name: 'Client 1' },
  { id: 2, name: 'Client 2' },
  { id: 3, name: 'Client 3' }
];

const clientSlice = createSlice({
  name: 'clients',
  initialState: {
    clientsList: defaultClients,
  },
  reducers: {
    addClient: (state, action) => {
      state.clientsList.push(action.payload);
    },
  },
});

export const { addClient } = clientSlice.actions;

export default clientSlice.reducer;
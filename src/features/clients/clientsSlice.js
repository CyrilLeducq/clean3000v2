import { createSlice } from '@reduxjs/toolkit';

const defaultClients = [
  { id: 1, name: 'Jardins d\'Ariana' },
  { id: 2, name: 'Jérôme Livran' },
  { id: 3, name: 'Archimed' },
  { id: 4, name: 'Philippe Parguey' },
  { id: 5, name: 'BeCom' },
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
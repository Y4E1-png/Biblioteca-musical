import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        addSong: (state, action) => {
            const cancionExiste = state.some(
                (cancion) => cancion.id === action.payload.id
            );

            if (!cancionExiste) {
                state.push(action.payload);
            }
        },

        removeSong: (state, action) => {
            return state.filter(
                (cancion) => cancion.id !== action.payload
            );
        }
    }
});

export const { addSong, removeSong } = librarySlice.actions;

export default librarySlice.reducer;
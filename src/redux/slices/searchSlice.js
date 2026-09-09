
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    results: [],
    loading: false,
    error: null
};

export const fetchSongs = createAsyncThunk(
    'search/fetchSongs',
    async (artista) => {

        const albumsResponse = await axios.get(
            `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodeURIComponent(artista)}`
        );

        const albumes = albumsResponse.data.album || [];
        const canciones = [];

        for (const album of albumes) {
            const tracksResponse = await axios.get(
                `https://www.theaudiodb.com/api/v1/json/123/track.php?m=${album.idAlbum}`
            );

            const tracks = tracksResponse.data.track || [];

            for (const track of tracks) {
                const duracion = Number(track.intDuration);
                const minutos = Math.floor(duracion / 60000);
                const segundos = Math.floor((duracion / 1000) % 60);

                canciones.push({
                    id: track.idTrack,
                    titulo: track.strTrack,
                    artista: track.strArtist,
                    album: track.strAlbum,
                    imagen: album.strAlbumThumb,
                    duracion: track.intDuration
                        ? `${minutos}:${String(segundos).padStart(2, '0')}`
                        : 'Desconocida'
                });
            }
        }

        return canciones;
    }
);

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        resetResults: (state) => {
            state.results = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSongs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSongs.fulfilled, (state, action) => {
                state.loading = false;
                state.results = action.payload;
            })
            .addCase(fetchSongs.rejected, (state) => {
                state.loading = false;
                state.error = "No fue posible buscar las canciones.";
            });
    }
});

export const { resetResults } = searchSlice.actions;

export default searchSlice.reducer;
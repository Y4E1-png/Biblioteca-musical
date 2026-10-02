
import { configureStore } from '@reduxjs/toolkit';
import libraryReducer from './slices/librarySlice';
import searchReducer from './slices/searchSlice';

const claveBiblioteca = 'biblioteca-musical';

const cargarBiblioteca = () => {
  try {
    const cancionesGuardadas = localStorage.getItem(claveBiblioteca);

    if (!cancionesGuardadas) {
      return [];
    }

    const canciones = JSON.parse(cancionesGuardadas);

    return Array.isArray(canciones) ? canciones : [];
  } catch (error) {
    console.error('No fue posible recuperar la biblioteca.', error);
    return [];
  }
};

const store = configureStore({
  reducer: {
    library: libraryReducer,
    search: searchReducer,
  },
  preloadedState: {
    library: cargarBiblioteca(),
  },
});

store.subscribe(() => {
  try {
    const canciones = store.getState().library;

    localStorage.setItem(
      claveBiblioteca,
      JSON.stringify(canciones)
    );
  } catch (error) {
    console.error('No fue posible guardar la biblioteca.', error);
  }
});

export default store;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../../redux/slices/searchSlice";
import { SearchForm, SearchInput, SearchButton, SearchField } from "./styles";

const SearchBar = (props) => {

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.search.loading);

  const buscarArtista = (e) => {
    e.preventDefault();

    const artista = props.artista.trim();
    if (!artista) {
      return;
    }

    dispatch(fetchSongs(artista));
  };


  return (
    <SearchForm onSubmit={buscarArtista}>
      <SearchField>
        <SearchInput
          id="artista"
          type="text"
          aria-label="Buscar artista"
          value={props.artista}
          onChange={(e) => props.setArtista(e.target.value)}
          placeholder="Escribe un artista"
        />

        <SearchButton type="submit" disabled={loading} aria-label={loading ? 'Buscando canciones' : 'Buscar artista'} title="Buscar artista" >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M16 16L21 21" />
          </svg>
        </SearchButton>
      </SearchField>
    </SearchForm>
  );
};

export default SearchBar;
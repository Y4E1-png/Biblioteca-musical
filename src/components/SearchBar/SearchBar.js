import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../../redux/slices/searchSlice";
import { SearchForm, SearchLabel, SearchInput, SearchButton } from "./styles";

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
            <SearchLabel htmlFor="artista">
                Buscar artista
            </SearchLabel>

            <SearchInput
                id="artista"
                type="text"
                value={props.artista}
                onChange={(e) => props.setArtista(e.target.value)}
                placeholder="Escribe un artista"
            />
            <SearchButton type="submit" disabled={loading}>
                {loading ? "Buscando..." : "Buscar"}
            </SearchButton>
        </SearchForm>
    );
};

export default SearchBar;
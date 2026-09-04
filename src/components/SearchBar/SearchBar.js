import React from "react";
import { SearchForm, SearchLabel, SearchInput, SearchButton } from "./styles";

const SearchBar = (props) => {
    return (
        <SearchForm onSubmit={props.buscarArtista}>
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
            <SearchButton type="submit">
                Buscar
            </SearchButton>
        </SearchForm>
    );
};

export default SearchBar;
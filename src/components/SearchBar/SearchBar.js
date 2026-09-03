import React from "react";

const SearchBar = (props) => {
    return (
        <form onSubmit={props.buscarArtista}>
            <label htmlFor="artista">Buscar artista:</label>

            <input
                id="artista"
                type="text"
                value={props.artista}
                onChange={(e) => props.setArtista(e.target.value)}
                placeholder="Escribe un artista"
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default SearchBar;
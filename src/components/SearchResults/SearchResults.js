
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Song from "../Song/Song";
import { ResultsContainer, ResultsTitle, ActionButton, Enlace } from "./styles";
import StatusMessage from "../StatusMessage/StatusMessage";
import { addSong } from "../../redux/slices/librarySlice";
import { fetchSongs } from "../../redux/slices/searchSlice";

const SearchResults = (props) => {

    const dispatch = useDispatch();

    const { results, loading, error } = useSelector(
        (state) => state.search
    );

    const reintentar = () => {
        const artista = props.artista.trim();

        if (artista) {
            dispatch(fetchSongs(artista));
        }
    };

    const renderContent = () => {
        if (loading) {
            return <StatusMessage>Cargando canciones...</StatusMessage>;
        }

        if (error) {
            return (
                <>
                    <StatusMessage error>{error}</StatusMessage>
                    <ActionButton type="button" onClick={reintentar}>
                        Reintentar
                    </ActionButton>
                </>
            );
        }

        if (results.length === 0) {
            return null;
        }

        return results.map((cancion) => (

            <div key={cancion.id}>
                <Song
                    imagen={cancion.imagen}
                    titulo={cancion.titulo}
                    artista={cancion.artista}
                    album={cancion.album}
                    duracion={cancion.duracion}
                />

                <Enlace to={`/song/${cancion.id}`}>
                    Ver detalles
                </Enlace>

                <ActionButton onClick ={() => dispatch(addSong(cancion))}>
                    Agregar a mi biblioteca
                </ActionButton>
            </div>
        ));
    };

    return (
        <ResultsContainer>
            <ResultsTitle>Resultados de la búsqueda</ResultsTitle>
            {renderContent()}
        </ResultsContainer>
    );
};

export default SearchResults;
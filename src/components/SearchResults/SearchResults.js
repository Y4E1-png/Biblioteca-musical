
import React from "react";
import Song from "../Song/Song";
import useFetch from "../../hooks/useFetch";
import {Link} from "react-router";
import { ResultsContainer, ResultsTitle, ActionButton } from "./styles";
import StatusMessage from "../StatusMessage/StatusMessage";

const SearchResults = (props) => {
    const { data, loading, error, reintentar } = useFetch(
        `https://www.theaudiodb.com/api/v1/json/123/track.php?m=${props.idAlbum}`
    ); 

    const renderContent = () => {
        if (loading) {
            return <StatusMessage>Cargando canciones...</StatusMessage>;
        }

        if (error) {
            return (
                <>
                    <StatusMessage error>Hubo un problema al cargar las canciones.</StatusMessage>
                    <ActionButton type="button" onClick={reintentar}>
                        Reintentar
                    </ActionButton>
                </>
            );
        }

        if (!data.track || data.track.length === 0) {
            return <StatusMessage>No se encontraron canciones.</StatusMessage>;
        }

        return data.track.map((track) => {

            const duracion = Number(track.intDuration);
            const minutos = Math.floor(duracion / 60000);
            const segundos = Math.floor((duracion / 1000) % 60);

            const cancion = {
                id: track.idTrack,
                titulo: track.strTrack,
                artista: track.strArtist,
                album: track.strAlbum,
                duracion: track.intDuration 
                ? `${minutos}:${String(segundos).padStart(2, '0')}` 
                : 'Desconocida'
            };
            
            return (
                <div key={cancion.id}>
                    <Song
                        titulo={cancion.titulo}
                        artista={cancion.artista}
                        album={cancion.album}
                        duracion={cancion.duracion}
                    />
                    <Link to={`/song/${cancion.id}`}>
                    Ver detalles
                    </Link>
                    <ActionButton onClick ={() => props.agregarCancion(cancion)}>
                        Agregar a mi biblioteca
                    </ActionButton>
                </div>
            );
        });
    };

    return (
        <ResultsContainer>
            <ResultsTitle>Resultados de la búsqueda</ResultsTitle>
            {renderContent()}
        </ResultsContainer>
    );
};

export default SearchResults;
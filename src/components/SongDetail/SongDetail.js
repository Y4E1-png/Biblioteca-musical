import React from "react";
import {useParams} from "react-router";
import useFetch from "../../hooks/useFetch";
import { SongDetailContainer, SongDetailTitle, RetryButton } from "./styles";
import Song from "../Song/Song";
import StatusMessage from "../StatusMessage/StatusMessage";

const SongDetail = () => {
    const { id } = useParams();

    const { data, loading, error, reintentar } = useFetch(
        `https://www.theaudiodb.com/api/v1/json/123/track.php?h=${id}`
    );


    const renderContent = () => {
        if (loading) {
            return <StatusMessage>Cargando canción...</StatusMessage>;
        }

        if (error) {
            return (
                <>
                    <StatusMessage error>Hubo un problema al cargar la canción.</StatusMessage>
                    <RetryButton type="button" onClick={reintentar}>
                        Reintentar
                    </RetryButton>
                </>
            );
        }

        if (!data.track || data.track.length === 0) {
            return <StatusMessage>No se encontraron detalles para esta canción.</StatusMessage>;
        }

        const cancion = data.track[0];

        const duracion = Number(cancion.intDuration);
        const minutos = Math.floor(duracion / 60000);
        const segundos = Math.floor((duracion / 1000) % 60);

        const duracionFormateada = cancion.intDuration
            ? `${minutos}:${String(segundos).padStart(2, '0')}`
            : 'Desconocida';

        return (
            <Song
                titulo={cancion.strTrack}
                artista={cancion.strArtist}
                album={cancion.strAlbum}
                duracion={duracionFormateada}
            />
        );
    };

    return (
        <SongDetailContainer>
            <SongDetailTitle>Detalles de la canción</SongDetailTitle>
            {renderContent()}
        </SongDetailContainer>
    );
};

export default SongDetail;
import React from "react";
import {useParams} from "react-router";
import useFetch from "../../hooks/useFetch";
import Song from "../Song/Song";

const SongDetail = () => {
    const { id } = useParams();

    const { data, loading, error, reintentar } = useFetch(
        `https://www.theaudiodb.com/api/v1/json/123/track.php?h=${id}`
    );


    const renderContent = () => {
        if (loading) {
            return <p>Cargando canción...</p>;
        }

        if (error) {
            return (
                <>
                    <p>Hubo un problema al cargar la canción.</p>
                    <button type="button" onClick={reintentar}>
                        Reintentar
                    </button>
                </>
            );
        }

        if (!data.track || data.track.length === 0) {
            return <p>No se encontraron detalles para esta canción.</p>;
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
        <section>
            <h2>Detalles de la canción</h2>
            {renderContent()}
        </section>
    );
};

export default SongDetail;
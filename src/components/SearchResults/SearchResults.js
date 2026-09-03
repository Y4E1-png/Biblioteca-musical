
import React from "react";
import Song from "../Song/Song";
import useFetch from "../../hooks/useFetch";
import {Link} from "react-router";
import './styles.css';

const SearchResults = (props) => {
    const { data, loading, error, reintentar } = useFetch(
        `https://www.theaudiodb.com/api/v1/json/123/track.php?m=${props.idAlbum}`
    ); 

    const renderContent = () => {
        if (loading) {
            return <p>Cargando canciones...</p>;
        }

        if (error) {
            return (
                <>
                    <p>Hubo un problema al cargar las canciones.</p>
                    <button type="button" onClick={reintentar}>
                        Reintentar
                    </button>
                </>
            );
        }

        if (!data.track || data.track.length === 0) {
            return <p>No se encontraron canciones.</p>;
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
                    <button onClick ={() => props.agregarCancion(cancion)}>
                        Agregar a mi biblioteca
                    </button>
                </div>
            );
        });
    };

    return (
        <section className="resultados">
            <h2>Resultados de la búsqueda</h2>
            {renderContent()}
        </section>
    );
};

export default SearchResults;
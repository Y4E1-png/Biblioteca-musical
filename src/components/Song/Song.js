import React from "react";
import './styles.css';

const Song = (props) => {
    return (
        <article className="cancion">
            <h2>{props.titulo}</h2>
            <p>Artista: {props.artista}</p>
            <p>Álbum: {props.album}</p>
            <p>Duración: {props.duracion}</p>
        </article>
    );
}

export default Song;
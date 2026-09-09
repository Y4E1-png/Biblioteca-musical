import React from "react";
import { SongContainer, SongTitle, SongText, AlbumImage } from "./styles";


const Song = (props) => {
    return (
        <SongContainer>
            {props.imagen && (
                <AlbumImage 
                    src={props.imagen} 
                    alt={`Portada de ${props.album}`} 
                />
            )}
            <div>
                <SongTitle>{props.titulo}</SongTitle>
                <SongText>Artista: {props.artista}</SongText>
                <SongText>Álbum: {props.album}</SongText>
                <SongText>Duración: {props.duracion}</SongText>
            </div>
        </SongContainer>
    );
}

export default Song;
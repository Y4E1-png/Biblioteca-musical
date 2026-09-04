import React from "react";
import { SongContainer, SongTitle, SongText } from "./styles";


const Song = (props) => {
    return (
        <SongContainer>
            <SongTitle>{props.titulo}</SongTitle>
            <SongText>Artista: {props.artista}</SongText>
            <SongText>Álbum: {props.album}</SongText>
            <SongText>Duración: {props.duracion}</SongText>
        </SongContainer>
    );
}

export default Song;
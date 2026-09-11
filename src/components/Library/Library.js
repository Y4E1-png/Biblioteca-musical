
import React from "react";
import Song from "../Song/Song";
import { LibraryContainer, LibraryTitle } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { removeSong } from "../../redux/slices/librarySlice";
import StatusMessage from "../StatusMessage/StatusMessage";


const Library = () => {

    const canciones = useSelector((state) => state.library);
    const dispatch = useDispatch();

    return (
        <LibraryContainer>
            <LibraryTitle>Mi biblioteca</LibraryTitle>
            
            {canciones.length === 0 && (
                <StatusMessage>
                    No hay canciones en tu biblioteca
                </StatusMessage>
            )}

            {canciones.map((cancion) => (
                <div key={cancion.id}>
                    <Song
                        imagen={cancion.imagen}
                        titulo={cancion.titulo}
                        artista={cancion.artista}
                        album={cancion.album}
                        duracion={cancion.duracion}
                    />
                    <button type="button" onClick={() => dispatch(removeSong(cancion.id))}>
                        Eliminar
                    </button>
                </div>
            ))}
        </LibraryContainer>
    );
}

export default Library;
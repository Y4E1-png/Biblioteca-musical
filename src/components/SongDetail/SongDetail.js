
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import Song from "../Song/Song";
import StatusMessage from "../StatusMessage/StatusMessage";
import { SongDetailContainer, DetailHeader, BackButton, SongDetailTitle, RetryButton } from "./styles";

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
        imagen={cancion.strTrackThumb}
        titulo={cancion.strTrack}
        artista={cancion.strArtist}
        album={cancion.strAlbum}
        duracion={duracionFormateada}
      />
    );
  };

  return (
    <SongDetailContainer>
      <DetailHeader>
        <BackButton to="/" aria-label="Volver a la biblioteca" title="Volver a la biblioteca">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5" />
            <path d="M12 5L5 12L12 19" />
          </svg>
        </BackButton>
        

        <SongDetailTitle>
          Detalles de la canción
        </SongDetailTitle>
      </DetailHeader>

      {renderContent()}
      
    </SongDetailContainer>
  );
};

export default SongDetail;
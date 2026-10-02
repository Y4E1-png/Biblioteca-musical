
import { CardContainer, CardCover, CardContent, CardTitle, CardArtist, CardData, RemoveButton } from './styles';

function LibrarySongCard({ savedSong, onRemoveSong }) {
  return (
    <CardContainer>
      {savedSong.imagen && (
        <CardCover
          src={savedSong.imagen}
          alt={`Portada de ${savedSong.album}`}
        />
      )}

      <CardContent>
        <CardTitle title={savedSong.titulo}>
          {savedSong.titulo}
        </CardTitle>

        <CardArtist title={savedSong.artista}>
          {savedSong.artista}
        </CardArtist>

        <CardData title={`${savedSong.album} · ${savedSong.duracion}`}>
          {savedSong.album} · {savedSong.duracion}
        </CardData>
      </CardContent>

      <RemoveButton type="button" onClick={onRemoveSong} aria-label={`Eliminar ${savedSong.titulo} de mi biblioteca`} title="Eliminar de mi biblioteca">
        <span aria-hidden="true">×</span>
      </RemoveButton>
    </CardContainer>
  );
}

export default LibrarySongCard;

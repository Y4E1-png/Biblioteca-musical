
import { CardContainer, CardCover, CardInfo, CardEyebrow, CardTitle, CardArtist, CardData, CardActions, DetailsLink, AddButton, ResultsTitle } from './styles';

function SearchResultsCard({ searchResult, onAddSong }) {
  return (
    <CardContainer>
      {searchResult.imagen && (
        <CardCover
          src={searchResult.imagen}
          alt={`Portada de ${searchResult.album}`}
        />
      )}

      <CardInfo>
        <ResultsTitle>Resultados de la búsqueda</ResultsTitle>

        <CardEyebrow>Canción</CardEyebrow>

        <CardTitle>{searchResult.titulo}</CardTitle>

        <CardArtist>{searchResult.artista}</CardArtist>

        <CardData>
          {searchResult.album} · {searchResult.duracion}
        </CardData>

        <CardActions>
          <AddButton type="button" onClick={onAddSong}>
            <span aria-hidden="true">+</span>
            Agregar a mi biblioteca
          </AddButton>

          <DetailsLink to={`/song/${searchResult.id}`} aria-label={`Ver detalles de ${searchResult.titulo}`} title="Ver detalles">
            <span aria-hidden="true">⋯</span>
          </DetailsLink>
        </CardActions>
      </CardInfo>
    </CardContainer>
  );
}

export default SearchResultsCard;

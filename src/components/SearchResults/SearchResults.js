
import { useDispatch, useSelector } from "react-redux";
import SearchResultsCard from '../SearchResultsCard/SearchResultsCard';
import { ResultsContainer, ActionButton, EmptyState, EmptyIcon, EmptyTitle, EmptyDescription, NoResultsIcon } from "./styles";
import StatusMessage from "../StatusMessage/StatusMessage";
import { addSong } from "../../redux/slices/librarySlice";
import { fetchSongs } from "../../redux/slices/searchSlice";

const SearchResults = (props) => {

  const dispatch = useDispatch();

  const { results, loading, error, hasSearched } = useSelector(
    (state) => state.search
  );

  const reintentar = () => {
    const artista = props.artista.trim();

    if (artista) {
      dispatch(fetchSongs(artista));
    }
  };

  const renderContent = () => {
    if (loading) {
      return <StatusMessage>Cargando canciones...</StatusMessage>;
    }

    if (error) {
      return (
        <>
          <StatusMessage error>{error}</StatusMessage>
          <ActionButton type="button" onClick={reintentar}>
            Reintentar
          </ActionButton>
        </>
      );
    }

    if (!hasSearched) {
      return (
        <EmptyState>
          <EmptyIcon aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="10" cy="10" r="6" />
              <path d="M14.5 14.5L20 20" />
            </svg>
          </EmptyIcon>

          <EmptyTitle>
            Encuentra tu próxima canción
          </EmptyTitle>

          <EmptyDescription>
            Busca un artista en la barra superior, descubre sus canciones
            y guarda tus favoritas en tu biblioteca.
          </EmptyDescription>
        </EmptyState>
      );
    }

    if (results.length === 0) {
      return (
        <EmptyState>
          <NoResultsIcon aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" >
              <circle cx="10" cy="10" r="6" />
              <path d="M14.5 14.5L20 20" />
              <path d="M8 8L12 12M12 8L8 12" />
            </svg>
          </NoResultsIcon>

          <EmptyTitle>
            No encontramos canciones
          </EmptyTitle>

          <EmptyDescription>
            Revisa el nombre del artista o prueba con otro para
            descubrir nuevas canciones.
          </EmptyDescription>
        </EmptyState>
      );
    }

    return results.map((searchResult) => (
      <SearchResultsCard
        key={searchResult.id}
        searchResult={searchResult}
        onAddSong={() => dispatch(addSong(searchResult))}
      />
    ));
  }

  return (
    <ResultsContainer>
      {renderContent()}
    </ResultsContainer>
  );
};

export default SearchResults;

import { useSelector, useDispatch } from 'react-redux';
import { removeSong } from '../../redux/slices/librarySlice';
import LibrarySongCard from '../LibrarySongCard/LibrarySongCard';
import { LibraryContainer, LibraryTitle, LibraryGrid, LibraryEmptyState, LibraryEmptyIcon, LibraryEmptyTitle, LibraryEmptyDescription } from './styles';

const Library = () => {
  const canciones = useSelector((state) => state.library);
  const dispatch = useDispatch();

  return (
    <LibraryContainer>
      <LibraryTitle>Mi biblioteca</LibraryTitle>

      {canciones.length === 0 && (
        <LibraryEmptyState>
          <LibraryEmptyIcon aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" >
              <path d="M9 18V5L21 3V16" />
              <path d="M9 9L21 7" />
              <ellipse cx="6" cy="18" rx="3" ry="2" />
              <ellipse cx="18" cy="16" rx="3" ry="2" />
            </svg>
          </LibraryEmptyIcon>

          <LibraryEmptyTitle>
            Aún no has guardado canciones
          </LibraryEmptyTitle>

          <LibraryEmptyDescription>
            Busca un artista y pulsa «Agregar a mi biblioteca»
            en las canciones que quieras guardar.
          </LibraryEmptyDescription>
        </LibraryEmptyState>
      )}

      <LibraryGrid>
        {canciones.map((cancionGuardada) => (
          <LibrarySongCard
            key={cancionGuardada.id}
            savedSong={cancionGuardada}
            onRemoveSong={() =>
              dispatch(removeSong(cancionGuardada.id))
            }
          />
        ))}
      </LibraryGrid>
    </LibraryContainer>
  );
};

export default Library;
import styled from 'styled-components';

export const LibraryContainer = styled.section`
    max-width: 800px;
    margin: 0 auto;
    padding: 32px 20px;
    border-top: 2px solid ${props => props.theme.colors.primary};
`;

export const LibraryTitle = styled.h2`
  margin-top: 0;
`;
import styled from 'styled-components';

export const LibraryContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 30px 48px;

  @media (max-width: 760px) {
    padding: 24px 20px 40px;
  }
`;

export const LibraryTitle = styled.h2`
  margin: 0 0 24px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.2;
  color: ${props => props.theme.colors.text};
`;

export const LibraryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const LibraryEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 240px;
  padding: 40px 20px;
  text-align: center;

  @media (max-width: 760px) {
    padding: 32px 12px;
  }
`;

export const LibraryEmptyIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin-bottom: 20px;
  border: 1px solid rgba(239, 195, 164, 0.16);
  border-radius: 50%;
  background-color: rgba(239, 195, 164, 0.06);
  color: ${props => props.theme.colors.primary};
`;

export const LibraryEmptyTitle = styled.h3`
  max-width: 520px;
  margin: 0 0 12px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 30px;
  font-weight: 400;
  line-height: 1.2;
  text-wrap: balance;
  color: ${props => props.theme.colors.text};

  @media (max-width: 760px) {
    font-size: 26px;
  }
`;

export const LibraryEmptyDescription = styled.p`
  max-width: 440px;
  margin: 0;
  font-size: 16px;
  line-height: 1.7;
  color: ${props => props.theme.colors.secondaryText};
`;
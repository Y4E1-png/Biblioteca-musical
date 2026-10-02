
import styled from 'styled-components';

export const SongContainer = styled.article`
  display: flex;
  align-items: center;
  gap: 60px;
  background-color: transparent;

  @media (max-width: 900px) {
    gap: 32px;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: stretch;
    gap: 28px;
  }
`;

export const SongInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const SongTitle = styled.h2`
  margin: 0 0 20px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 72px;
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -1px;
  overflow-wrap: anywhere;
  text-wrap: balance;
  color: ${props => props.theme.colors.text};

  @media (max-width: 900px) {
    font-size: 56px;
  }

  @media (max-width: 760px) {
    font-size: 42px;
  }
`;

export const SongText = styled.p`
  margin: 8px 0;
  font-size: 16px;
  line-height: 1.5;
  overflow-wrap: anywhere;
  color: ${props => props.theme.colors.secondaryText};

  &:first-of-type {
    margin: 0 0 24px;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 35px;
    font-style: italic;
    line-height: 1.3;
  }

  @media (max-width: 760px) {
    &:first-of-type {
      font-size: 24px;
    }
  }
`;

export const AlbumImage = styled.img`
  display: block;
  width: 380px;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 14px;
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 300px;
  }

  @media (max-width: 760px) {
    width: 100%;
    max-width: 380px;
  }
`;
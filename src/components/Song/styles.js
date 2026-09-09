
import styled from "styled-components";

export const SongContainer = styled.article`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 16px;
  padding: 20px;
  background-color: ${props => props.theme.colors.surface};
  border-radius: 8px;
`;

export const SongTitle = styled.h2`
  margin: 0 0 12px;
  font-size: 20px;
  color: ${props => props.theme.colors.primary};
`;

export const SongText = styled.p`
  margin: 6px 0;
  color: ${props => props.theme.colors.secondaryText};
`;

export const AlbumImage = styled.img`
  display: block;
  width: 160px;
  height: 160px;
  border-radius: 4px;
  object-fit: cover;
  flex-shrink: 0;
`;
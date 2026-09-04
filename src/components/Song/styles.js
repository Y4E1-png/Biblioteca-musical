
import styled from "styled-components";

export const SongContainer = styled.article`
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
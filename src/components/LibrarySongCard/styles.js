
import styled from 'styled-components';

export const CardContainer = styled.article`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.text};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    transition: transform 0.2s ease;
  }
`;

export const CardCover = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 11px;
  background-color: transparent;
  
  text-shadow:
  -0.6px 0 0 rgba(0, 0, 0, 0.85),
   0.6px 0 0 rgba(0, 0, 0, 0.85),
   0 -0.6px 0 rgba(0, 0, 0, 0.85),
   0  0.6px 0 rgba(0, 0, 0, 0.85);
`;

export const CardTitle = styled.h3`
  margin: 0 0 6px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 22px;
  font-weight: 900;
  line-height: 1.29;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardArtist = styled.p`
  margin: 0 0 6px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardData = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: ${props => props.theme.colors.text};  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid rgba(245, 238, 232, 0.3);
  border-radius: 50%;
  background-color: rgba(11, 13, 14, 0.75);
  color: ${props => props.theme.colors.text};
  font: inherit;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryText};
    transition: background-color 0.2s ease, transform 0.2s ease;
    transform: translateY(-1.5px);
  }

  @media (max-width: 900px) {
    width: 44px;
    height: 44px;
  }
`;


import styled from 'styled-components';
import { Link } from 'react-router';

export const CardContainer = styled.article`
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 64px;
  background-color: transparent;

  @media (max-width: 900px) {
    gap: 32px;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
    margin-bottom: 48px;
  }
`;

export const CardCover = styled.img`
  display: block;
  width: 380px;
  height: auto;
  aspect-ratio: 1;
  border-radius: 14px;
  object-fit: cover;
  flex-shrink: 0;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);

  @media (max-width: 900px) {
    width: 300px;
  }

  @media (max-width: 760px) {
    width: 100%;
    max-width: 320px;
  }
`;

export const CardInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ResultsTitle = styled.h2`
  margin: 0 0 32px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
  color: ${props => props.theme.colors.secondaryText};
`;

export const CardEyebrow = styled.p`
  margin: 0 0 10px;
  font-size: 15px;
  line-height: 1.4;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
`;

export const CardTitle = styled.h3`
  margin: 0 0 12px;
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

export const CardArtist = styled.p`
  margin: 0 0 14px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 35px;
  font-style: italic;
  line-height: 1.3;
  overflow-wrap: anywhere;
  color: ${props => props.theme.colors.secondaryText};

  @media (max-width: 760px) {
    font-size: 24px;
  }
`;

export const CardData = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  overflow-wrap: anywhere;
  color: ${props => props.theme.colors.secondaryText};
`;

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
`;

export const DetailsLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid ${props => props.theme.colors.secondaryText};
  border-radius: 50%;
  font-size: 26px;
  line-height: 1;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
    transition: border-color 0.2s ease, transform 0.2s ease;
  }
`;

export const AddButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  border-radius: 999px;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryText};
  cursor: pointer;
  transition: background-color 0.5s ease, transform 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primaryHover};
    transform: translateY(-3px);
  }

  & > span {
    font-size: 22px;
    line-height: 1;
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router';


export const ResultsContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 25px;

  @media (max-width: 760px) {
    padding: 24px 20px;
  }
`;


export const Enlace = styled(Link)`
  display: inline-block;
  margin-right: 12px;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primaryHover};
    text-decoration: underline;
  }
`;

export const ActionButton = styled.button`
  margin-bottom: 24px;
  padding: 10px 16px;
  color: ${props => props.theme.colors.primaryText};
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primaryHover};
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 360px;
  padding: 48px 24px;
  text-align: center;

  @media (max-width: 760px) {
    min-height: 280px;
    padding: 32px 12px;
  }
`;

export const EmptyIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  margin-bottom: 24px;
  border: 1px solid rgba(239, 195, 164, 0.18);
  border-radius: 50%;
  background-color: rgba(239, 195, 164, 0.08);
  color: ${props => props.theme.colors.primary};
`;

export const EmptyTitle = styled.h2`
  max-width: 660px;
  margin: 0 0 16px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 1.15;
  color: ${props => props.theme.colors.text};

  @media (max-width: 760px) {
    font-size: 36px;
  }
`;

export const EmptyDescription = styled.p`
  max-width: 440px;
  margin: 0;
  font-size: 16px;
  line-height: 1.7;
  color: ${props => props.theme.colors.secondaryText};
`;

export const NoResultsIcon = styled(EmptyIcon)`
  border-style: dashed;
  background-color: transparent;
  color: ${props => props.theme.colors.secondaryText};
`;
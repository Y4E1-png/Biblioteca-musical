import styled from 'styled-components';
import { Link } from 'react-router';


export const ResultsContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 20px;
`;

export const ResultsTitle = styled.h2`
  margin-top: 0;
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
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primaryHover};
  }
`;
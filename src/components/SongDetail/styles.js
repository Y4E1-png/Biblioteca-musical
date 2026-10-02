
import styled from 'styled-components';
import { Link } from 'react-router';

export const SongDetailContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 70px 33px 64px;

  @media (max-width: 760px) {
    padding: 24px 20px 40px;
  }
`;

export const DetailHeader = styled.div`
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr) 44px;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid ${props => props.theme.colors.secondaryText};
  border-radius: 50%;
  font-size: 26px;
  line-height: 1;
  color: ${props => props.theme.colors.text};
  background-color: transparent;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryText};
  }
`;

export const SongDetailTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-size: 25px;
  font-weight: 400;
  line-height: 1.3;
  text-align: center;
  text-wrap: balance;
  color: ${props => props.theme.colors.secondaryText};

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const RetryButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 999px;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryText};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primaryHover};
  }
`;
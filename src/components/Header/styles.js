
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 20px 24px 35px;
  background-color: transparent;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    padding: 30px 20px 24px;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

export const BrandLogo = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

export const Title = styled.h1`
  margin: 0;
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 25px;
  font-weight: 300;
  line-height: 1.4;
  letter-spacing: 5px;
  text-transform: uppercase;
  flex-shrink: 0;
  color: ${props => props.theme.colors.text};

  @media (max-width: 640px) {
    font-size: 16px;
    letter-spacing: 3px;
  }
`;
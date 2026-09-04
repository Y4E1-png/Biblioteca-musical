import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 24px;
  text-align: center;
  background-color: ${props => props.theme.colors.header};
  border-bottom: 4px solid ${props => props.theme.colors.primary};
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 32px;
`;
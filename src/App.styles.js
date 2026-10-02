
import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};

  background-image: radial-gradient(
    ellipse 600px 350px at 30% 0px,
    rgba(239, 195, 164, 0.22) 0%,
    rgba(239, 195, 164, 0.08) 45%,
    transparent 75%
  );

  background-repeat: no-repeat;
`;
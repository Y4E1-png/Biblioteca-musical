import styled from "styled-components";

export const Message = styled.p`
    color: ${props => 
        props.$error ? props.theme.colors.error : props.theme.colors.text
    }
`;
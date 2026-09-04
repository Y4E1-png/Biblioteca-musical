import styled from 'styled-components';

export const SongDetailContainer = styled.section`
    max-width: 800px;
    margin: 0 auto;
    padding: 32px 20px;
`;

export const SongDetailTitle = styled.h2`
    margin-top: 0;
`;

export const RetryButton = styled.button`
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
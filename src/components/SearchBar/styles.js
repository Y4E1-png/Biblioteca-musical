import styled from 'styled-components';

export const SearchForm = styled.form`
    max-width: 800px;
    margin: 0 auto;
    padding: 32px 20px;
`;

export const SearchLabel = styled.label`
    margin-right: 12px;
`;

export const SearchInput = styled.input`
    padding: 10px;
    margin-right: 12px;
    border: none;
    border-radius: 4px;
`;

export const SearchButton = styled.button`
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
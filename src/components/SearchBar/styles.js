
import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 460px;
  min-width: 0;
  margin: 0;
  margin-left: auto;
  padding: 0;
  font-size: 14px;

  @media (max-width: 640px) {
    max-width: none;
    margin-left: 0;
    font-size: 16px;
  }
`;

export const SearchField = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
  padding: 4px;
  border-radius: 999px;
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid #6262627d;

  &:focus-within {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  padding: 10px 12px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  font: inherit;

  &::placeholder {
    color: ${props => props.theme.colors.secondaryText};
  }

  &:focus-visible {
  outline: none;
}
`;

export const SearchButton = styled.button`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  margin: 5px;
  border: none;
  border-radius: 999px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryText};
  font: inherit;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.5s ease, transform 0.2s ease; 

  &:hover {
    background-color: ${props => props.theme.colors.primaryHover};
    transition: background-color 0.5s ease, transform 0.2s ease;
    transform: translateY(-3px);
  }

  &:disabled {
    cursor: wait;
    opacity: 0.7;
  }
`;
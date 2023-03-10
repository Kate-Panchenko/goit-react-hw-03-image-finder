import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.accent};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  border: 0;
  border-radius: 20px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  padding-left: 18px;
  padding-right: 4px;
  height: 40px;
  margin-right: 12px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  gap: 8px;
  font: inherit;
  font-size: 20px;
`;

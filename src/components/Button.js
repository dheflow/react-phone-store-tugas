import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  border-radius: 0.3rem;
  font-size: 1.4rem;
  background: transparent;
  border: 0.1rem solid white;
  color: white;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover{
    background: white;
    color: #8685EF;
  }
  &:focus{
    outline:none;
  }
`;

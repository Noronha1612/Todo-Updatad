import styled from "styled-components";

export const InputContainer = styled.form`
  display: flex;

  width: 100%;
  gap: 0.5rem;

  input {
    width: 100%;

    color: var(--gray-100);
    background-color: var(--gray-500);
    border: 0;
    border-radius: 8px;

    padding: 1rem;
    outline: 0;

    &:active, &:focus {
      outline: 1px solid var(--purple-dark);
    }

    ::placeholder {
      color: var(--gray-300);
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: .5rem;
    
    padding: 1rem;

    border: 0;
    border-radius: 8px;
    background-color: var(--blue-dark);

    cursor: pointer;
    transition: background-color .2s;

    &:hover {
      background-color: var(--blue);
    }
  }
`

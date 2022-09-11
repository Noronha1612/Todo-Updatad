import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
`

export const Header = styled.header`
  width: 100%;
  min-height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: var(--gray-700);
  
  img {
    height: 48px;
  }
`

export const Content = styled.section`
  margin: 0 auto;
  max-width: calc(768px + 2rem);
  width: 100%;

  margin-top: -1.5rem;

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;

  padding: 0 2rem;
`

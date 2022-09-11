import styled from "styled-components";

export const TasksContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;

  margin-bottom: 2rem;

  header {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: .75rem;
    margin-top: 1.5rem;

    .nothing-found {
      border-top: 1px solid var(--gray-400);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      padding: 4rem 0;

      * {
        color: var(--gray-300);
      }

      svg:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`

type TaskHeaderSpanProps = {
  variant: 'blue' | 'purple';
}

export const TaskHeaderSpan = styled.span<TaskHeaderSpanProps>`
  color: var(--${({ variant }) => variant});
  font-weight: 700;
  font-size: .875rem;

  span {
    margin-left: 8px;
    border-radius: 1rem;

    color: var(--gray-200);
    background: var(--gray-400);

    padding: .125rem .5rem;
  }
`

export const TaskContainer = styled.div<{ checked?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  width: 100%;

  background-color: var(--gray-500);
  padding: 1rem;
  border-radius: 8px;

  label {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;

    background-color: ${({ checked }) => checked ? 'var(--purple-dark)' : 'none'};
    border: ${({ checked }) => checked ? 0 : '2px solid var(--blue)'};
    border-radius: 50%;

    cursor: pointer;
    transition: all .2s;

    svg {
      color: var(--gray-100);
    }

    &:hover {
      border: ${({ checked }) => checked ? 0 : '2px solid var(--blue-dark)'};
      background-color: ${({ checked }) => checked ? 'var(--purple)' : 'var(--blue-dark-20p)'};
    }
  }

  span {
    flex: 1;

    text-decoration: ${({ checked }) => checked ? 'line-through' : 'none'};
    color: var(${({ checked }) => checked ? '--gray-300' : '--gray-100'});
  }

  button {
    background: 0;
    border: 0;
    color: var(--gray-300);
    cursor: pointer;

    transition: color .3s;

    &:hover {
      color: var(--danger);
    }
  }
`;
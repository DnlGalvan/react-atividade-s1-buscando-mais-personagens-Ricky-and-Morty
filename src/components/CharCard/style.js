import styled, { css } from "styled-components";

export const Card = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  ${(props) =>
    props.status === "Alive"
      ? css`
          background: var(--color-card-live);
          border: 2px solid var(--border-card-live);
          h2 {color: var(--color-font-live);}
        `
      : css`
          background: var(--color-card-dead);
          border: 2px solid var(--border-card-dead);
          h2 {color: var(--color-font-dead);}
        `
    }

  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
    box-shadow: 0 0 8px black;
  }

  & > h2 {
    text-align: center;
    max-width: 15ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & p {
    font-weight: 600;
  }

  & > img {
    width: 200px;
    height: 200px;
    border-radius: 15%;
    border: 1px solid black;
  }
`;
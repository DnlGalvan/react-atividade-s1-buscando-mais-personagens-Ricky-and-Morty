import styled, { css } from "styled-components";

export const Main = styled.main`
  max-width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  max-width: 80%;
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  & > h1 {
    text-align: center;
    font-size: 3rem;
    color: var(--background);
    background: azure;
    border: 1px solid;
    padding: 10px;
    box-shadow: 5px 10px black;
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;

export const Button = styled.button`
  ${(props) =>
    props.pages === null
      ? css`
          visibility: hidden;
        `
      : css`
          visibility: visible;
        `};
  max-width: 130px;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 1.5rem;
  font-weight: 600;
  background: beige;
  color: black;
  transition: all 0.5s;
  cursor: pointer;
  box-shadow: 0 9px #999;

  &:hover {
    background-color: bisque;
  }

  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(5px);
  }
`;
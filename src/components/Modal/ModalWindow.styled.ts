import styled, { css } from 'styled-components';
interface Prop {
  $variant: string | null;
}
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(20, 20, 20, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 444;
`;

export const Modal = styled.div<Prop>`
  width: 335px;
  height: 439px;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  border-radius: ${({ theme }) => theme.radii.m};
  position: relative;
  ${({ $variant }) =>
    $variant === 'min-modal' &&
    css`
      width: 335px;
      height: 290px;
      button {
        display: none;
      }
    `};
  @media screen and (min-width: 1440px) {
    width: 500px;
    height: 483px;
    ${({ $variant }) =>
      $variant === 'min-modal' &&
      css`
        width: 342px;
        height: 290px;
        button {
          display: none;
        }
      `};
  }
  h1 {
    text-align: center;
  }
`;
export const ButtonClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    transition: rotate(360deg);
  }
`;

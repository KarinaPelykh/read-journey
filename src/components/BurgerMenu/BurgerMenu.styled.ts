import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(20, 20, 20, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 555;

  button:first-child {
    display: flex;
    margin-left: auto;
  }
  transform: translateX(100%);
  transition: transform 250ms ease;

  &.open {
    transform: translateX(0%);
  }
`;
export const Menu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 40px 40px 40px 55px;
  z-index: 555;
`;
export const Svg = styled.svg`
  width: 28px;
  height: 28px;
  stroke: ${({ theme }) => theme.colors.white};
`;

import { Link } from "react-router-dom";
import styled from "styled-components";

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
`;

export const Modal = styled.div`
  width: 500px;
  height: 483px;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  border-radius: ${({ theme }) => theme.radii.m};
  position: relative;
`;
export const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ButtonLink = styled(Link)`
  color: transparent;
`;

import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const WrapperButton = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${({ theme }) => theme.radii.xl};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px 29px;
  margin-right: 14px;
  width: fit-content;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  transition-property: background-color, color, text-shadow, box-shadow;
  transition-duration: 250ms;
  &:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px #000;
  }

  &:hover {
    color: #000;
    background-color: #fff;
    box-shadow: 0 0 5px #000;
    text-shadow: 0 0 5px #000;
  }

  ${({ variant }) =>
    variant === 'log-out' &&
    css`
      @media screen and (max-width: 767px) {
        padding: 10px 20px;
        display: none;
      }
      margin-right: 0px;
      margin-left: 16px;
      padding: 12px 28px;
      border-radius: ${({ theme }) => theme.radii.xl};
      border: ${({ theme }) => theme.borders.normal};
      border-color: ${({ theme }) => theme.colors.liteWhite};
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.lightBlack};
    `};

  ${({ variant }) =>
    variant === 'buttonBase' &&
    css`
      border-radius: ${({ theme }) => theme.radii.xl};
      border: ${({ theme }) => theme.borders.normal};
      border-color: ${({ theme }) => theme.colors.liteWhite};
      color: ${({ theme }) => theme.colors.white};
      background-color: transparent;
      margin: 0;
    `};
  ${({ variant }) =>
    variant === 'buttonModal' &&
    css`
      margin: 0;
      border-radius: ${({ theme }) => theme.radii.xl};
      border: ${({ theme }) => theme.borders.normal};
      border-color: ${({ theme }) => theme.colors.liteWhite};
      color: ${({ theme }) => theme.colors.white};
      background-color: transparent;
    `};
`;
export const LinkOnLOgin = styled(Link)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.ss};
`;

import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface Button {
  $variant: string | undefined;
}

export const WrapperButton = styled.div<Button>`
  display: flex;
  justify-content: start;
  align-items: center;

  ${({ $variant }) =>
    $variant === 'wrapper' &&
    css`
      margin-top: auto;
      @media screen and (min-width: 768px) {
        margin-top: 82px;
      }
    `}
  ${({ $variant }) =>
    $variant === 'loginWrapper' &&
    css`
      margin-top: auto;

      button {
        padding: 12px 45px;
      }

      @media screen and (min-width: 768px) {
        margin-top: 146px;
        button {
          padding: 16px 54px;
        }
      }
    `}
`;
export const ReusableButton = styled.button<Button>`
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

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    padding: 16px 54px;
  }

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

  ${({ $variant }) =>
    $variant === 'log-out' &&
    css`
      @media screen and (max-width: 767px) {
        padding: 10px 20px;
        display: none;
      }
      margin-right: 0px;
      margin-left: 16px;
      font-size: ${({ theme }) => theme.fontSizes.s}!important;
      padding: 12px 28px !important;
      border-radius: ${({ theme }) => theme.radii.xl};
      border: ${({ theme }) => theme.borders.normal};
      border-color: ${({ theme }) => theme.colors.liteWhite};
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.lightBlack};
    `};

  ${({ $variant }) =>
    $variant === 'buttonBase' &&
    css`
      border-radius: ${({ theme }) => theme.radii.xl};
      border: ${({ theme }) => theme.borders.normal};
      border-color: ${({ theme }) => theme.colors.liteWhite};
      color: ${({ theme }) => theme.colors.white};
      background-color: transparent;
      margin: 0;
    `};

  ${({ $variant }) =>
    $variant === 'buttonModal' &&
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
  @media screen and (min-width: 767px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

import styled, { css } from 'styled-components';

type Prop = {
  $variant?: string;
};

export const Image = styled.img<Prop>`
  border-radius: ${({ theme }) => theme.radii.s};
  width: 137px;
  height: 208px;

  ${({ $variant }) =>
    $variant === 'modal' &&
    css`
      margin-bottom: 16px;
    `}

  ${({ $variant }) =>
    $variant === 'widget' &&
    css`
      width: 65px;
      height: 107px;
      @media screen and (min-width: 375px) {
        width: 71px;
      }
    `}
`;
export const Title = styled.h1<Prop>`
  width: 137px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2px;
  margin-top: 8px;

  ${({ $variant }) =>
    $variant === 'modal' &&
    css`
      margin-top: 0;

      white-space: normal;
      text-align: center;
      width: fit-content;
      overflow: visible;
      font-size: ${({ theme }) => theme.fontSizes.xl};
    `}

  ${({ $variant }) =>
    $variant === 'widget' &&
    css`
      width: 71px;
      font-size: ${({ theme }) => theme.fontSizes.xs};
      margin-bottom: 2px;
      margin-top: 8px;
    `}
`;
export const Author = styled.p<Prop>`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  ${({ $variant }) =>
    $variant === 'modal' &&
    css`
      margin-bottom: 4px;
      font-size: ${({ theme }) => theme.fontSizes.s};
    `}

  ${({ $variant }) =>
    $variant === 'widget' &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 20px;
    `}
`;

export const QuantityPages = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: 32px;
`;

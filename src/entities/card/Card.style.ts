import styled, { css } from 'styled-components';

type Prop = {
  $variant?: string;
};

export const Li = styled.li<Prop>`
  cursor: pointer;

  ${({ $variant }) =>
    $variant === 'reading' &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      cursor: default;
    `}

  ${({ $variant }) =>
    $variant === 'widget' &&
    css`
      cursor: default;
    `}
`;

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


    ${({ $variant }) =>
    $variant === 'reading' &&
    css`
      width: 224px;
      height: 340px;
      margin-bottom: 25px;
    `}
`;

export const Box = styled.div<Prop>`
  ${({ $variant }) =>
    $variant === 'library-list' &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
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


      ${({ $variant }) =>
    $variant === 'reading' &&
    css`
      width: 100%;
      font-size: ${({ theme }) => theme.fontSizes.xl};
      margin-top: 0px;
      margin-bottom: 4px;
    `}


    ${({ $variant }) =>
    $variant === 'library-list' &&
    css`
      width: 89px;
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

    
  ${({ $variant }) =>
    $variant === 'reading' &&
    css`
      margin-bottom: 20px;
      text-align: center;
      font-size: ${({ theme }) => theme.fontSizes.s};
      margin-bottom: 25px;
    `}
`;

export const QuantityPages = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: 32px;
`;

import styled, { css } from 'styled-components';

type SvgProps = {
  $variant?: string;
};

export const Svg = styled.svg<SvgProps>`
  width: 28px;
  height: 28px;
  stroke: ${({ theme }) => theme.colors.white};

  ${({ $variant }) =>
    $variant === 'logo' &&
    css`
      width: 42px;
      height: 17px;
      fill: ${({ theme }) => theme.colors.white};
    `}

  ${({ $variant }) =>
    $variant === 'validation' &&
    css`
      width: 20px;
      height: 20px;
      position: absolute;
      top: 13px;
      right: 43px;
      stroke: transparent;
    `}


    
  ${({ $variant }) =>
    $variant === 'display-password' &&
    css`
      width: 20px;
      height: 20px;
      position: absolute;
      top: 13px;
      right: 13px;
      stroke: transparent;
    `}


      ${({ $variant }) =>
    ($variant === 'watches' || $variant === 'icon-pie-chart') &&
    css`
      width: 20px;
      height: 20px;
    `}

     ${({ $variant }) =>
    $variant === 'log-in' &&
    css`
      width: 24px;
      height: 24px;
    `}

    
     ${({ $variant }) =>
    ($variant === 'icon-2' || $variant === 'icon-1') &&
    css`
      width: 44px;
      height: 44px;
    `}

      ${({ $variant }) =>
    $variant === 'block' &&
    css`
      width: 20px;
      height: 20px;
      position: absolute;
      left: -27px;
    `}

        ${({ $variant }) =>
    $variant === 'trash' &&
    css`
      width: 14px;
      height: 14px;
      position: absolute;
      top: 5px;
      left: 8px
      stroke: #686868;
      fill: transparent;
    `}

 ${({ $variant }) =>
    $variant === 'trash-2' &&
    css`
      width: 14px;
      height: 14px;
    `}

    
        ${({ $variant }) =>
    $variant === 'icon-block' &&
    css`
      width: 59px;
      height: 25px;
    `}


         ${({ $variant }) =>
    $variant === 'reading-button' &&
    css`
      width: 50px;
      height: 50px;
    `}
`;

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
`;

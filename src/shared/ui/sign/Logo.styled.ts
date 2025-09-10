import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type LogoProps = {
  $variant?: string;
};

export const WrapperLogo = styled.div<LogoProps>`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 157px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 104px;
  }

  ${({ $variant }) =>
    $variant === 'logo-header' &&
    css`
      @media screen and (min-width: 320px) {
        margin-bottom: 0;
      }

      margin-right: auto;
    `}
`;

export const TextLogo = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
    margin-left: 4px;
  }
`;

export const LinkLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

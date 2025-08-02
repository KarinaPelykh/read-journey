import styled, { css } from 'styled-components';
import { Prop } from '../Header/UserNav/UserNav.styled';
import { Link } from 'react-router-dom';

export const WrapperLogo = styled.div<Prop>`
  margin-bottom: 40px;
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

export const Logo = styled.svg`
  width: 42px;
  height: 17px;
  fill: ${({ theme }) => theme.colors.white};
`;
export const TextLogo = styled.p`
  display: none;
  @media screen and (min-width: 1439px) {
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.white};
    margin-left: 4px;
  }
`;

export const LinkLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

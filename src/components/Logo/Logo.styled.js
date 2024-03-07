import styled, { css } from "styled-components";
export const WrapperSvg = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 104px;
  }

  ${({ variant }) =>
    variant === "logo-header" &&
    css`
      @media screen and (min-width: 1440px) {
        margin-bottom: 0;
      }

      margin-right: auto;
    `}
`;

export const Logo = styled.svg`
  width: 42px;
  height: 17px;
`;
export const TextLogo = styled.p`
  @media screen and (max-width: 767px) {
    display: none;
  }
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-left: 4px;
`;

import styled from "styled-components";

export const WrapperQuote = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    padding: 15px 20px;
    background-color: ${({ theme }) => theme.colors.darkGray};
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.radii.m};
  }
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.grey};
`;
export const SpanWord = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

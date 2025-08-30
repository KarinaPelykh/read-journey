import styled from 'styled-components';

export const Comment = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 32px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    width: 444px;
    line-height: 60px;

    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 43px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.liteWhite};
`;

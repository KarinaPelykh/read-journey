import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
`;
export const Div = styled.div`
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 40px;
  }
`;
export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin-bottom: auto;
    width: 321px;
  }
`;
export const WrapperProgress = styled.div`
  width: 295px;
  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;

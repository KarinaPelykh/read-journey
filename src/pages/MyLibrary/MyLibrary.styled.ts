import styled from 'styled-components';

export const Div = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;
////
export const WrapperBooks = styled.div`
  background: ${({ theme }) => theme.colors.lightBlack};
  padding: 40px 20px;
  border-radius: ${({ theme }) => theme.radii.xl};
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding-bottom: 40px;
    width: 847px;

    padding: 45px 40px 20px 40px;
  }
`;

export const TextLibrary = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

/// modal
export const TextGreeting = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: 14px;
  margin-top: 32px;
`;

export const Greeting = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.grey};
`;

export const SpanGreeting = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.white};
`;

export const Block = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 83px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 28px;
  }
`;

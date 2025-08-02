import styled from 'styled-components';

export const Section = styled.section`
  @media screen and (min-width: 1439px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const WrapperRegisterForm = styled.div`
  background: ${({ theme }) => theme.colors.lightBlack};
  padding: 20px 20px 40px 20px;
  border-radius: ${({ theme }) => theme.radii.xl};

  @media screen and (min-width: 768px) {
    padding: 40px 168px 214px 64px;
  }

  @media screen and (min-width: 1439px) {
    padding: 40px 64px 40px 64px;
    max-width: 600px;
    margin-right: 16px;
  }
`;

export const Comment = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    width: 444px;
    margin-bottom: 35px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 43px;
    width: 100%;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.liteWhite};
`;

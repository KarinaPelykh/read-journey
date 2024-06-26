import styled from 'styled-components';
export const WrapperBooks = styled.div`
  background: ${({ theme }) => theme.colors.lightBlack};
  padding: 40px 20px;
  border-radius: ${({ theme }) => theme.radii.xl};
  width: 100%;
  position: relative;
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
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: 34px;
  @media screen and (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: 28px;
  }
`;

export const TextLibrary = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: 83px;
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 28px;
  }
`;

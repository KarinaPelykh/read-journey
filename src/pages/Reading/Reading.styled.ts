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

/////
export const TextTime = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.ss};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const TimeReading = styled.div`
  display: flex;
  gap: 10px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

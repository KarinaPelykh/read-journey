import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.m};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 321px;
    height: 252px;
    margin-top: 14px;
  }
  @media screen and (min-width: 1440px) {
    width: 313px;
    height: auto;
  }
`;

export const Circle = styled.div`
  border-radius: ${({ theme }) => theme.radii.round};
  width: 166px;
  height: 166px;
  display: flex;
  justify-content: center;
`;

export const Square = styled.div`
  border-radius: ${({ theme }) => theme.radii.xs};
  background-color: ${({ theme }) => theme.colors.lightGreen};
  width: 14px;
  height: 14px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const StatTeller = styled.p`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSizes.ss};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;

export const TextSeeds = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.ss};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const WrapperInform = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

export const Div = styled.div`
  margin-left: 15px;
`;

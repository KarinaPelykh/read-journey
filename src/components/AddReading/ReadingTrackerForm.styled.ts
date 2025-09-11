import styled from 'styled-components';

export const Form = styled.form`
  @media screen and (min-width: 768px) {
    margin-right: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 0;
  }
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.ss};
  margin-left: 14px;
  margin-bottom: 8px;
  @media screen and (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;
export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 8px;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 17px;
  left: 12px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
export const InputAddBook = styled.input`
  width: 100%;
  padding: 16px 16px 16px 111px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.m};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.ss};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 14px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

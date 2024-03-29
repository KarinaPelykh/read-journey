import styled, { css } from 'styled-components';
export const Form = styled.form`
  margin-bottom: 20px;
  div:nth-child(3) {
    margin: 0;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    margin-right: 34px;
    margin-bottom: 0;
  }
`;
export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 8px;
  margin-left: 14px;
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;
export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 8px;
`;
export const Label = styled.label`
  position: absolute;
  top: 17px;
  left: 12px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
export const InputFilter = styled.input`
  width: 100%;
  padding: 16px 16px 16px 86px;
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
  ${({ variant }) =>
    variant === 'input2' &&
    css`
      padding: 16px 16px 16px 95px;
    `}
`;

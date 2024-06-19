import styled, { css } from 'styled-components';
type Prop = {
  $variant?: string;
};
export const Form = styled.form`
  margin-bottom: 20px;
  div:nth-child(4) {
    margin: 0;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 32px;
    div:nth-child(4) {
      margin-bottom: 38px;
    }
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
    margin-right: 0;
    div:nth-child(4) {
      margin: 0;
      margin-bottom: 20px;
    }
  }
`;

export const Title = styled.p`
  margin-left: 14px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.xs};
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
export const InputADD = styled.input<Prop>`
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
  }
  ${({ $variant }) =>
    $variant === 'input2' &&
    css`
      padding: 16px 16px 16px 95px;
    `}
  ${({ $variant }) =>
    $variant === 'input3' &&
    css`
      padding: 16px 16px 16px 135px;
    `}
`;

import styled, { css } from 'styled-components';

type Prop = {
  $variant: string | null;
};

export const RegisterForm = styled.form`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.ss};
  width: 100%;
  outline: none;
  border: transparent;
  padding: 14px 14px 14px 62px;

  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.m};
  margin-bottom: 14px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.ss};
  }
`;

export const InputPassword = styled.input<Prop>`
  width: 100%;
  outline: none;
  padding: 14px 14px 14px 80px;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.m};
  margin-bottom: 20px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.ss};
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 55px;
  }

  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.ss};
  border-width: 1px;
  border-style: solid;

  border-color: ${({ $variant }) =>
    ($variant === 'error' && 'red') ||
    ($variant === 'successful' && 'lightGreen') ||
    ($variant === 'default' && 'transparent')};
  transition: border-color 0.3s ease;
`;

export const DivWrapperInput = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  color: ${({ theme }) => theme.colors.grey};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  font-size: ${({ theme }) => theme.fontSizes.ss};
  top: 15px;
  left: 14px;
`;

export const TextError = styled.div`
  position: absolute;
  top: 42px;
  left: 2px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

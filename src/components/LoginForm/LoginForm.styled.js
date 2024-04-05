import styled, { css } from 'styled-components';

export const LoginForm = styled.form`
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
  padding: 14px 14px 14px 62px;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.m};
  margin-bottom: 14px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.ss};
  }
`;

export const InputPassword = styled.input`
  width: 100%;
  outline: none;
  padding: 14px 14px 14px 80px;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.m};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.ss};
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.ss};
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 110px;
  }

  ${({ $variant }) =>
    $variant === 'error' &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.red};
    `}

  ${({ $variant }) =>
    $variant === 'successful' &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.lightGreen};
    `}
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
  position: relative;
  top: -22px;
  left: 4px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.ss};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  @media screen and (min-width: 768px) {
    top: -110px;
  }
`;

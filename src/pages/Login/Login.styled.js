import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 1439px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const WrapperForm = styled.div`
  background: ${({ theme }) => theme.colors.lightBlack};
  padding: 20px;
  padding-bottom: 40px;
  border-radius: ${({ theme }) => theme.radii.xl};

  @media screen and (min-width: 375px) {
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 40px 168px 214px 64px;
  }
  @media screen and (min-width: 1439px) {
    padding: 40px 64px 40px 64px;
    max-width: 600px;
    min-height: 100vh;
    margin-right: 16px;
  }
`;

export const Comment = styled.p`
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

import styled from 'styled-components';

type Prop = {
  $variant?: string;
};

export const InputPassword = styled.input<Prop>`
  width: 100%;
  outline: none;
  padding: 14px 14px 14px 80px;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.m};

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.ss};
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

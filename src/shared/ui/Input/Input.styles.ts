import styled from 'styled-components';

export const FormInput = styled.input`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.ss};
  width: 100%;
  outline: none;
  border: transparent;
  padding: 14px 14px 14px 62px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.m};

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.ss};

    @media screen and (min-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.s};
    }
  }

  @media screen and (min-width: 768px) {
    padding: 16px 16px 16px 62px;
  }
`;

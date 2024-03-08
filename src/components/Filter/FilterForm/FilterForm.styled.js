import styled, { css } from "styled-components";
export const Form = styled.form`
  margin-bottom: 20px;
  div:nth-child(3) {
    margin: 0;
    margin-bottom: 20px;
  }
`;
export const Title = styled.p`
  margin-left: 14px;
  margin-bottom: 8px;
    font-size:${({ theme }) => theme.fontSizes.s};
  font-weight${({ theme }) => theme.fontWeights.medium};
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
  font-size:${({ theme }) => theme.fontSizes.s};
  font-weight${({ theme }) => theme.fontWeights.medium};
`;
export const InputFilter = styled.input`
  width: 100%;
  padding: 16px 16px 16px 86px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.m};
  color: ${({ theme }) => theme.colors.white};
   font-size:${({ theme }) => theme.fontSizes.s};
  font-weight${({ theme }) => theme.fontWeights.medium};

    ${({ variant }) =>
      variant === "input2" &&
      css`
        padding: 16px 16px 16px 95px;
      `}
`;

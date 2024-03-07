import styled from "styled-components";
export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  display: flex;
  justify-content: center;
`;

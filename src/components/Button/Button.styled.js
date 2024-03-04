import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperButton = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${({ theme }) => theme.radii.xl};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px 29px;
  margin-right: 14px;
  width: fit-content;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export const LinkOnLOgin = styled(Link)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.ss};
`;

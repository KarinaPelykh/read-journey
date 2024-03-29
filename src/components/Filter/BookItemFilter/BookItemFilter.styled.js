import styled from "styled-components";
export const BookImg = styled.img`
  border-radius: ${({ theme }) => theme.radii.s};
  width: 137px;
  height: 208px;
`;
export const Title = styled.h1`
  width: 137px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2px;
  margin-top: 8px;
`;
export const Author = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

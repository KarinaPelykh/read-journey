import styled from "styled-components";
export const ListBook = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid: 20px;
`;

export const BookImg = styled.img`
  border-radius: ${({ theme }) => theme.radii.s};
  width: 137px;
`;
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
`;
export const Author = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

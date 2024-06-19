import styled, { css } from 'styled-components';
interface Prop {
  $variant?: string | null;
}
export const BookImg = styled.img<Prop>`
  border-radius: ${({ theme }) => theme.radii.s};
  width: 137px;
  height: 208px;
  ${({ $variant }) =>
    $variant === 'imgModal' &&
    css`
      margin-bottom: 16px;
    `}
`;
export const Title = styled.h1<Prop>`
  width: 137px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2px;
  margin-top: 8px;
  ${({ $variant }) =>
    $variant === 'titleModal' &&
    css`
      margin-top: 0;

      white-space: normal;
      text-align: center;
      width: fit-content;
      overflow: visible;
      font-size: ${({ theme }) => theme.fontSizes.xl};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
    `}
`;
export const Author = styled.p<Prop>`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  ${({ $variant }) =>
    $variant === 'titleAuthor' &&
    css`
      margin-bottom: 4px;
      font-size: ${({ theme }) => theme.fontSizes.s};
    `}
`;
export const QuantityPages = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: 32px;
`;

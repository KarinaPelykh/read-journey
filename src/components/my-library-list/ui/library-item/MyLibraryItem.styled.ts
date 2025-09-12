import styled from 'styled-components';

export const Image = styled.img`
  border-radius: ${({ theme }) => theme.radii.s};
  width: 137px;
  height: 208px;
`;

export const WrapperItem = styled.div`
  display: flex;
  align-items: center;
  width: 137px;
  justify-content: space-between;
`;

export const Title = styled.h1`
  width: 100px;
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

export const ButtonDelete = styled.button`
  border-radius: ${({ theme }) => theme.radii.round};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.redBorder};
  background-color: rgba(232, 80, 80, 0.1);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: border-color, background-color;
  transition-duration: 250ms;
  &:hover {
    border-color: #f40009;
    background-color: rgba(232, 80, 80, 0.1);
  }
`;

export const QuantityPages = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: 32px;
`;

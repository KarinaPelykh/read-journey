import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 375px) {
    li {
      margin-right: 20px;
    }
    li:last-child {
      margin: 0;
    }
  }
`;
export const Img = styled.img`
  border-radius: ${({ theme }) => theme.radii.s};
  width: 65px;
  height: 107px;
  @media screen and (min-width: 375px) {
    width: 71px;
  }
`;
export const Title = styled.h1`
  width: 71px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2px;
  margin-top: 8px;
`;
export const Author = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 20px;
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.m};
  padding: 20px;
  /* 
  @media screen and (min-width: 1440px) {
    width: 313px;
    height: 259px;
  } */
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};

  margin-bottom: 14px;
  @media screen and (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: 20px;
  }
`;

export const LinkHome = styled(Link)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.s};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

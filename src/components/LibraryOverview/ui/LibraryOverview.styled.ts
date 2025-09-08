import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Block = styled.div`
  border-radius: ${({ theme }) => theme.radii.m};
  background: ${({ theme }) => theme.colors.darkGray};
  width: 100%;
  height: auto;
  padding: 20px;

  @media screen and (min-width: 768px) {
    width: 313px;
  }

  @media screen and (min-width: 1440px) {
    border-radius: ${({ theme }) => theme.radii.m};
    background: ${({ theme }) => theme.colors.darkGray};
    width: 100%;
    height: auto;
    padding: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 20px;
  @media screen and (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: 40px;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Information = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  width: 197px;
  margin-left: 12px;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export const LinkLibrary = styled(Link)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.font};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const ImgRead = styled.img`
  border-radius: ${({ theme }) => theme.radii.s};
  width: 224px;
  height: 340px;
  margin-bottom: 25px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 4px;
`;

export const Author = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 25px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
`;

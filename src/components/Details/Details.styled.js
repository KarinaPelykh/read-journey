import styled from "styled-components";

export const Title = styled.h1`
  margin-top: 40px;
  margin-bottom: 14px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export const Describe = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 60px;
`;

export const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImgStatic = styled.img`
  width: 100px;
  height: 100px;
`;

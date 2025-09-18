import styled from 'styled-components';

export const WrapperMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
  position: relative;
`;

export const Data = styled.p`
  /* color: ${({ theme }) => theme.colors.white}; */
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-right: auto;
`;

export const Pages = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

import styled from 'styled-components';

export const WrapperMain = styled.div`
  display: flex;
  margin-bottom: 28px;
  align-items: center;
`;

export const Data = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-right: auto;
`;

export const Pages = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

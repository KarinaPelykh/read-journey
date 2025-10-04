import styled from 'styled-components';

export const ContainerInfo = styled.div`
  display: flex;
`;

export const Head = styled.div`
  margin-right: 105px;
`;

export const Minutes = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.ss};
`;

export const Speed = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.ss};
  width: 55px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ProgressReading = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

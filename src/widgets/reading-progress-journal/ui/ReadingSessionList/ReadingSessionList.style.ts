import styled from 'styled-components';

export const ContainerInfo = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const Head = styled.div`
  margin-right: auto;
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

export const Div = styled.p`
  display: flex;
  justify-content: center;
  button {
    position: relative;
  }
`;

export const ProgressReading = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

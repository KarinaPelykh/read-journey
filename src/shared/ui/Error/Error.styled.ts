import styled from 'styled-components';

export const TextError = styled.div`
  position: absolute;
  top: 42px;
  left: 2px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

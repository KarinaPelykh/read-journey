import styled from 'styled-components';
export const Button = styled.button`
  width: 28px;
  height: 28px;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const Svg = styled.svg`
  width: 28px;
  height: 28px;
  stroke: ${({ theme }) => theme.colors.white};
`;

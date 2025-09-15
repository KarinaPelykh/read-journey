import styled from 'styled-components';

export const ButtonDelete = styled.button`
  border-radius: ${({ theme }) => theme.radii.round};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.redBorder};
  background-color: rgba(232, 80, 80, 0.1);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: border-color, background-color;
  transition-duration: 250ms;
  &:hover {
    border-color: #f40009;
    background-color: rgba(232, 80, 80, 0.1);
  }
`;

import styled from 'styled-components';

export const MyListBook = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  justify-items: center;

  @media screen and (min-width: 375px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

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

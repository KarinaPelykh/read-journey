import styled from 'styled-components';

export const ListBook = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  justify-items: center;
  @media screen and (min-width: 375px) {
    grid-template-columns: repeat(2, 137px);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 137px);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

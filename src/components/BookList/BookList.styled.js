import styled from 'styled-components';

export const ListBook = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 137px);
  gap: 21px;
  @media screen and (max-width: 320px) {
    display: grid;
    grid-template-columns: repeat(1, 137px);
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 137px);
    gap: 20px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

import styled from "styled-components";
export const Container = styled.div`
  padding: 20px;
  margin: 0 auto;

  @media screen and (min-width: 376px) {
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1400px;
  }
`;

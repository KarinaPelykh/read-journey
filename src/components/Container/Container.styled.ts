import styled from 'styled-components';
export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1280px;
  }
`;

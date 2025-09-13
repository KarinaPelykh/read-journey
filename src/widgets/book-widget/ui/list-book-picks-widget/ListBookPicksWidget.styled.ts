import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 375px) {
    li {
      margin-right: 20px;
    }
    li:last-child {
      margin: 0;
    }
  }
`;

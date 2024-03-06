import styled from "styled-components";

export const HeaderDiv = styled.header`
  background: ${({ theme }) => theme.colors.lightBlack};
  border-radius: ${({ theme }) => theme.radii.l};
  padding: 16px 28px;
  height: 74px;

  margin-bottom: 16px;

  @media screen and (min-width: 1440px) {
    width: 1216px;
  }
`;
export const Nav = styled.nav`
  div {
    margin: 0;
    display: none;
  }
  @media screen and (min-width: 1440px) {
    div {
      margin: 0;
      display: flex;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Div = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
  a:first-child {
    margin-right: 20px;
  }

  display: flex;
`;

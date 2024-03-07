import styled from "styled-components";

export const HeaderDiv = styled.header`
  background: ${({ theme }) => theme.colors.lightBlack};
  border-radius: ${({ theme }) => theme.radii.l};
  padding: 20px 16px;
  height: 74px;

  margin-bottom: 16px;

  @media screen and (min-width: 1440px) {
    width: 1216px;
  }
`;
export const Nav = styled.nav`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;

import styled from 'styled-components';

export const HeaderDiv = styled.header`
  background: ${({ theme }) => theme.colors.lightBlack};
  border-radius: ${({ theme }) => theme.radii.l};
  margin-bottom: 10px;
  padding: 11px 15px;
  @media screen and (min-width: 768px) {
    padding: 20px 16px;
    height: 74px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1440px) {
    width: 1216px;
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;

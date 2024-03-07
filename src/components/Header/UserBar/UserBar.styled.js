import styled from "styled-components";
export const UserSvg = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.round};
  background-color: ${({ theme }) => theme.colors.darkGray};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.liteWhite};
  margin-right: 8px;
`;
export const Div = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: center;
  align-items: center;
`;

import styled from "styled-components";
export const UserSvg = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.round};
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border: ${({ theme }) => theme.borders.normal};
`;

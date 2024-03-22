import styled from "styled-components";
export const DivDashboard = styled.div`
  background: ${({ theme }) => theme.colors.lightBlack};

  padding-bottom: 20px;
  border-radius: ${({ theme }) => theme.radii.xl};

  width: 100%;
  margin-bottom: 16px;
  height: 478px;

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 32px;
  }
  @media screen and (min-width: 1440px) {
    display: block;
    margin: 0;
    margin-right: 16px;
    padding-bottom: 40px;
    width: 353px;
    padding: 40px 20px 20px 20px;
    height: 651px;
  }
`;

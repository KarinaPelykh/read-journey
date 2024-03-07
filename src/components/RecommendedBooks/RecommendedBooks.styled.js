import styled from "styled-components";
export const WrapperBooks = styled.div`
  background: ${({ theme }) => theme.colors.lightBlack};
  padding: 20px 40px;
  border-radius: ${({ theme }) => theme.radii.xl};
  width: 100%;

  height: 382px;
  @media screen and (min-width: 768px) {
    /* display: flex; */
    padding: 40px;
    height: 663px;
  }
  @media screen and (min-width: 1440px) {
    /* display: flex; */
    margin: 0;
    /* padding: 40px 40px 28px 40px; */
    padding-bottom: 40px;
    width: 847px;
    padding: 45px 40px 20px 40px;
    height: 651px;
  }
`;
export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 28px;
`;

import styled from 'styled-components';

export const WrapperForm = styled.div`
  background: ${({ theme }) => theme.colors.lightBlack};
  padding: 20px;
  padding-bottom: 0px;
  border-radius: ${({ theme }) => theme.radii.xl};
  margin-top: 10px;

  @media screen and (min-width: 375px) {
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1439px) {
    display: flex;

    padding: 80px 97px 0px 97px;
    max-width: 600px;
    margin-top: 0;
  }
`;
export const Images = styled.img`
  width: 393px;
  height: auto;
`;
export const Picture = styled.picture`
  display: block;
  @media only screen and (min-width: 1440px) {
    margin-top: 22px;
  }
`;

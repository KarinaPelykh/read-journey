import styled from 'styled-components';

export const WrapperForm = styled.div`
  background: ${({ theme }) => theme.colors.lightBlack};
  padding: 20px 20px 0 20px;
  border-radius: ${({ theme }) => theme.radii.xl};
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1439px) {
    display: flex;
    padding: 95px 97px 0px 97px;
    margin-top: 0;
    width: 600px;
  }
`;

export const Images = styled.img`
  margin: 0 auto;

  @media screen and (min-width: 1439px) {
    width: 405px;
    height: 656px;
  }
`;

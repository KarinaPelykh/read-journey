import styled from 'styled-components';

export const WrapperForm = styled.div`
  background: ${({ theme }) => theme.colors.lightBlack};
  padding: 20px;
  padding-bottom: 0px;
  border-radius: ${({ theme }) => theme.radii.xl};
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1439px) {
    display: flex;
    overflow: hidden;
    padding: 80px 97px 0px 97px;
    margin-top: 0;
  }
`;

export const Images = styled.img`
  margin: 0 auto 0 auto;
  object-fit: contain;
`;

export const Picture = styled.picture`
  display: block;
`;

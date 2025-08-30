import styled from 'styled-components';

export const Section = styled.section`
  @media screen and (min-width: 1439px) {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
`;

export const Main = styled.div`
  width: auto;
  height: 411px;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.lightBlack};
  padding: 20px 20px 40px 20px;
  border-radius: ${({ theme }) => theme.radii.xl};

  @media screen and (min-width: 768px) {
    padding: 40px 168px 214px 64px;
    height: auto;
  }

  @media screen and (min-width: 1439px) {
    padding: 40px 64px 40px 64px;
  }
`;

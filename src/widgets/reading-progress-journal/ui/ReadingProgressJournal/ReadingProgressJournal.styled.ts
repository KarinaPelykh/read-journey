import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.m};
  padding: 9px 32px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1440px) {
    width: 313px;
  }
`;

export const List = styled.ul`
  width: 100%;
`;

export const VerticalDiv = styled.div`
  display: flex;

  background-color: ${({ theme }) => theme.colors.lightBlack};
  width: 3px;
  height: 100%;
  border-radius: ${({ theme }) => theme.radii.m};

  position: absolute;
  top: 12px;
  left: 14px;
`;

export const Diary = styled.div`
  margin-top: 20px;
  overflow-y: auto;
  height: 373px;
`;

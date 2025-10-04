import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 1;
  position: relative;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const VerticalDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlack};
  width: 5px;
  height: 100%;

  border-radius: ${({ theme }) => theme.radii.m};

  position: absolute;
  z-index: -1;
  left: 8px;
`;

export const Block = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: 25px 20px 25px 20px;
  border-radius: ${({ theme }) => theme.radii.m};
`;

import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 40px;
  margin-bottom: 14px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export const Describe = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 60px;
`;

export const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImgStatic = styled.img`
  width: 100px;
  height: 100px;
`;

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
export const WrapperMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
  position: relative;
`;
export const ContainerInfo = styled.div`
  display: flex;

  margin-bottom: 40px;
`;
export const DivInfoRead = styled.div`
  margin-right: auto;
`;
export const Data = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-right: auto;
`;
export const Pages = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
export const Minutes = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.ss};
`;
export const Speed = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.ss};
  width: 55px;
`;
export const Div = styled.p`
  display: flex;
  justify-content: center;
  button {
    position: relative;
  }
`;
export const Trash = styled.svg`
  position: absolute;
  top: 5px;
  left: 8px;
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
export const DivDiary = styled.div`
  margin-top: 20px;
  overflow-y: auto;
  height: 373px;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

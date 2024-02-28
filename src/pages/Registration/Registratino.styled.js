import styled from "styled-components";
export const WrapperForm = styled.div`
  background: ${({ theme }) => theme.colors.lightBlack};
  padding: 20px;
  padding-bottom: 40px;
  border-radius: ${({ theme }) => theme.radii.xl};

  @media screen and (min-width: 375px) {
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 40px 168px 214px 64px;
  }
  @media screen and (min-width: 1439px) {
    padding: 40px 64px 40px 64px;
    max-width: 600px;
    min-height: 100vh;
  }
`;
export const WrapperSvg = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 104px;
  }
`;

export const Logo = styled.svg`
  width: 42px;
  height: 17px;
`;
export const TextLogo = styled.p`
  @media screen and (max-width: 767px) {
    display: none;
  }
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-left: 4px;
`;

export const Comment = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    width: 444px;
    margin-bottom: 35px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 43px;
    width: 100%;
  }
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.colors.liteWhite};
`;

export const RegisterForm = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.m};
  margin-bottom: 8px;
`;

export const InputPassword = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.m};
`;
export const Button = styled.button`
  border-radius: ${({ theme }) => theme.radii.xl};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px 29px;
  margin-right: 14px;
`;
export const WrapperButton = styled.div`
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 82px;
  }
`;

export const LinkOnLOgin = styled.a`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.ss};
`;

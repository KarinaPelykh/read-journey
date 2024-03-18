import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;
export const Text = styled.p`
  width: 274px;
  margin-top: 20px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.colors.grey};
`;

export const MyListBook = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const BookImg = styled.img`
  border-radius: ${({ theme }) => theme.radii.s};
  width: 137px;
  height: 208px;
`;
export const Title = styled.h1`
  width: 137px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2px;
  margin-top: 8px;
`;
export const Author = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const TextGreeting = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: 14px;
  margin-top: 32px;
`;
export const Greeting = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.grey};
`;
export const SpanGreeting = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.white};
`;
export const ButtonDelete = styled.button`
  border-radius: ${({ theme }) => theme.radii.round};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.redBorder};
  background-color: rgba(232, 80, 80, 0.1);
  width: 28px;
  height: 28px;
`;
export const WrapperItem = styled.div`
  display: flex;
`;

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

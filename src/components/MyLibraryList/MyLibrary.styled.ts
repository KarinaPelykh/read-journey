import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  width: 197px;
  text-align: center;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    width: 274px;
    margin-top: 20px;

    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.colors.grey};
`;

export const MyListBook = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  justify-items: center;
  @media screen and (min-width: 375px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const TextGreeting = styled.p`
  color: ${({ theme }) => theme.colors.white};
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

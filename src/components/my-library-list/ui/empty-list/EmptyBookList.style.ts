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

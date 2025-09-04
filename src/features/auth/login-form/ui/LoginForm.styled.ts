import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const DivWrapperInput = styled.div`
  position: relative;
  margin-bottom: 14px;
`;

export const Label = styled.label`
  position: absolute;
  top: 15px;
  left: 14px;

  color: ${({ theme }) => theme.colors.grey};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.ss};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

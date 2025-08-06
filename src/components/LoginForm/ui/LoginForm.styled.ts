import styled from 'styled-components';

export const LoginForm = styled.form`
  height: 100%;
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  flex-direction: column;
  /* @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    row-gap: 14px;
  } */
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
`;

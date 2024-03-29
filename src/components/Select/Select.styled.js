import styled from 'styled-components';
export const Selector = styled.select`
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radii.m};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.liteWhite};
  color: ${({ theme }) => theme.colors.white};
  outline: 0;
  width: 120px;
  padding: 14px;
  position: absolute;
  top: 35px;
  right: 20px;
  appearance: none;
  @media screen and (min-width: 1440px) {
    width: 153px;
    top: 45px;
    right: 39px;
  }
`;
export const Option = styled.option`
  color: ${({ theme }) => theme.colors.grey};
  &:checked {
    background-color: transparent;
  }
`;
export const CustomRow = styled.span`
  display: block;
  content: '';
  background-color: ${({ theme }) => theme.colors.white};
  width: 10px;
  padding: 1px;
  position: absolute;
  top: 68px;
  right: 60px;
  transform: rotate(45deg);
`;
export const CustomRowTwe = styled.span`
  display: block;
  content: '';
  background-color: ${({ theme }) => theme.colors.white};
  width: 10px;
  padding: 1px;
  position: absolute;
  top: 68px;
  right: 53px;
  transform: rotate(138deg);
`;

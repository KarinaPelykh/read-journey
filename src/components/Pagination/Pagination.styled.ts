import styled from 'styled-components';

export const WrapperPagination = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  position: absolute;
  top: 35px;
  left: 170px;

  @media screen and (min-width: 375px) {
    left: 230px;
  }
  @media screen and (min-width: 768px) {
    top: 44px;
    left: 520px;
  }
  @media screen and (min-width: 1440px) {
    left: 727px;
  }
  button:last-child {
    margin-left: 8px;
  }
`;
export const Button = styled.button`
  background-color: transparent;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.round};

  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SvgNext = styled.svg`
  transform: rotate(178deg);
  stroke: ${({ theme }) => theme.colors.grey};
`;
export const SvgPrevious = styled.svg`
  stroke: ${({ theme }) => theme.colors.grey};
`;

import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

type ListProp = {
  $variant?: string;
};

export const List = styled.ul<ListProp>`
  display: none;

  ${({ $variant }) =>
    $variant === 'burger-menu' &&
    css`
      display: flex;
      flex-direction: column;
      & > ${Item}:first-child {
        margin-bottom: 20px;
      }
    `}

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Item = styled(NavLink)`
  margin-right: 40px;
  position: relative;
  
  &:last-child {
    margin-right: 0;
  }

  &.active::before {
    position: absolute;
    top: 100%;
    left: 0;
    content: '';
    display: inline-block;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.blue};
    border-radius: ${({ theme }) => theme.radii.s};
  }
`;

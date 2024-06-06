import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Item = styled(NavLink)`
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }
`;

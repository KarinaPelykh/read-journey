import { Link } from "react-router-dom";
import styled from "styled-components";
export const Item = styled(Link)`
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }
`;

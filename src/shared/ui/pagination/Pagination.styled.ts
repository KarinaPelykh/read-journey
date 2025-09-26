import styled from 'styled-components';

export const WrapperPagination = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

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

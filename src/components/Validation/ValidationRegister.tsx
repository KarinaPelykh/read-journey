import { FC } from 'react';
import icon from '../../images/sprite.svg';
import styled from 'styled-components';
type Information = {
  errors: string | undefined;
  touched: boolean | undefined;
};
export const ValidationRegister: FC<Information> = ({ errors, touched }) => {
  return (
    <>
      {touched && errors ? (
        <SvgValidation width="20px" height="20px">
          <use xlinkHref={icon + '#error'}></use>
        </SvgValidation>
      ) : touched && !errors ? (
        <SvgValidation width="20px" height="20px">
          <use xlinkHref={icon + '#icon-check-psw'}></use>
        </SvgValidation>
      ) : null}
    </>
  );
};
export const SvgValidation = styled.svg`
  position: absolute;
  top: 13px;
  right: 43px;
`;

import icon from '/images/sprite.svg';
import styled from 'styled-components';

type Information = {
  errors?: string;
  touched?: boolean;
};

export const ValidationRegister = ({ errors, touched }: Information) => {
  return (
    <>
      {touched && (
        <SvgValidation width="20px" height="20px">
          <use
            xlinkHref={icon + `${errors ? '#error' : '#icon-check-psw'}`}
          ></use>
        </SvgValidation>
      )}
    </>
  );
};

export const SvgValidation = styled.svg`
  position: absolute;
  top: 13px;
  right: 43px;
`;

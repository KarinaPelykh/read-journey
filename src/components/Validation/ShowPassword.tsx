import icon from '/images/sprite.svg';
import styled from 'styled-components';

type ShowPasswordProps = {
  toggle: () => void;
  showPsw: boolean;
};

export const ShowPassword = ({ toggle, showPsw }: ShowPasswordProps) => {
  return (
    <button type="button" onClick={toggle}>
      <SvgValidation width="20px" height="20px">
        <use xlinkHref={icon + (showPsw ? '#eye-off' : '#eye')}></use>
      </SvgValidation>
    </button>
  );
};

export const SvgValidation = styled.svg`
  position: absolute;
  top: 13px;
  right: 13px;
`;

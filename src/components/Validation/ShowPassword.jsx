import icon from "../../images/sprite.svg";
import styled from "styled-components";

export const ShowPassword = ({ toggle, openPAsword }) => {
  return (
    <button type="button" onClick={toggle}>
      {openPAsword ? (
        <SvgValidation width="20px" height="20px">
          <use xlinkHref={icon + "#eye-off"}></use>
        </SvgValidation>
      ) : (
        <SvgValidation width="20px" height="20px">
          <use xlinkHref={icon + "#eye"}></use>
        </SvgValidation>
      )}
    </button>
  );
};
export const SvgValidation = styled.svg`
  position: absolute;
  top: 13px;
  right: 13px;
`;

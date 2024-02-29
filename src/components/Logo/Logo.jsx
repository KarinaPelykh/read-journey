import icon from "../../images/sprite.svg";
import { Logo, TextLogo, WrapperSvg } from "./Logo.styled";

export const LogoMain = () => {
  return (
    <WrapperSvg>
      <Logo>
        <use xlinkHref={icon + "#logo"}></use>
      </Logo>
      <TextLogo>READ JOURNEY</TextLogo>
    </WrapperSvg>
  );
};

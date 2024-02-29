import { Images, WrapperForm } from "./Hero.styled";
import photo from "../../images/photo-commons/iPhone-Black-des.png";
export const Hero = () => {
  return (
    <WrapperForm>
      <Images src={photo} alt="phone" />
    </WrapperForm>
  );
};

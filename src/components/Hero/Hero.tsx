import { Images, Picture, WrapperForm } from './Hero.styled';

import photo from '../../images/photo-commons/iPhone-Black-des.png';
import iPhoneBlackDes from '../../images/photo-des/des-webp/iPhone-Black-des@1x.webp';
import iPhoneBlack from '../../images/photo-des/des-webp/iPhone-Black-des@2x.webp';
import iPhoneBlackDecPng from '../../images/photo-des/iPhone-Black-des@1x.png';
import iPhoneBlackDecPng2x from '../../images/photo-des/iPhone-Black-des@2x.png';
import iPhoneBlackMob from '../../images/photo-mob-web/mob-webp/iPhone-Black-mob-1@1x.webp';
import iPhoneBlackMobWeb from '../../images/photo-mob-web/mob-webp/iPhone-Black-mob1@2x.webp';
import iPhoneBlackMobPng from '../../images/photo-mob-web/iPhone-Black-mob-1@1x.png';
import iPhoneBlackMobPng2x from '../../images/photo-mob-web/iPhone-Black-mob1@2x.png';

export const Hero = () => {
  return (
    <WrapperForm>
      <Picture>
        <source
          media="(min-width:1440px)"
          srcSet={`${iPhoneBlackDes} 1x, ${iPhoneBlack} 2x,`}
          type="image/webp"
        />

        <source
          media="(min-width :1440px)"
          srcSet={`${iPhoneBlackDecPng} 1x, ${iPhoneBlackDecPng2x} 2x`}
          type="image/png"
        />

        <source
          media="(max-width:765px)"
          srcSet={`${iPhoneBlackMob} 1x, ${iPhoneBlackMobWeb} 2x,`}
          type="image/webp"
        />
        <source
          media="(min-width :765px)"
          srcSet={`${iPhoneBlackMobPng} 1x, ${iPhoneBlackMobPng2x} 2x`}
          type="image/png"
        />
        <Images src={photo} alt="phone" />
      </Picture>
    </WrapperForm>
  );
};

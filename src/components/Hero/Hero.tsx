import { Images, WrapperForm } from './Hero.styled';

export const Hero = () => {
  return (
    <WrapperForm>
      <picture>
        <source
          media="(min-width:1440px)"
          srcSet="/images/photo-des/des-webp/iPhone-Black-des@1x.webp 1x, /images/photo-des/des-webp/iPhone-Black-des@2x.webp 2x"
          type="image/webp"
        />

        <source
          media="(min-width:1440px)"
          srcSet="/images/photo-des/iPhone-Black-des@1x.png 1x, /images/photo-des/iPhone-Black-des@2x.png 2x"
          type="image/png"
        />

        <source
          media="(max-width:767px)"
          srcSet="/images/photo-mob-web/mob-webp/iPhone-Black-mob-1@1x.webp 1x, /images/photo-mob-web/mob-webp/iPhone-Black-mob1@2x.webp 2x"
          type="image/webp"
        />
        <source
          media="(min-width:767px)"
          srcSet="/images/photo-mob-web/iPhone-Black-mob-1@1x.png 1x, /images/photo-mob-web/iPhone-Black-mob1@2x.png 2x"
          type="image/png"
        />
        <Images
          src="/images/photo-commons/iPhone-Black-des.png"
          alt="phone"
          loading="lazy"
          width={405}
          height={656}
        />
      </picture>
    </WrapperForm>
  );
};

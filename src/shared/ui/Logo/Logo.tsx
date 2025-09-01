import { useAppSelector } from '@/hooks/hooks';
import { isLoggedInSelect } from '@/redux/auth/selectors';
import { LinkLogo, Logo, TextLogo, WrapperLogo } from './Logo.styled';
import icon from '/images/sprite.svg';

type LogoMainProps = {
  variant?: string;
};

export const LogoMain = ({ variant }: LogoMainProps) => {
  const isLogin = useAppSelector(isLoggedInSelect);

  return (
    <WrapperLogo $variant={variant}>
      <LinkLogo to={isLogin ? '/recommended' : ''}>
        <Logo>
          <use xlinkHref={icon + '#logo'}></use>
        </Logo>
        <TextLogo>READ JOURNEY</TextLogo>
      </LinkLogo>
    </WrapperLogo>
  );
};

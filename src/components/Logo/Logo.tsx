import icon from '../../images/sprite.svg';
import { Logo, TextLogo, WrapperLogo, LinkLogo } from './Logo.styled';
import { isLoggedInSelect } from '../../redux/auth/selectors';
import { useAppSelector } from '../../hooks/hooks';

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

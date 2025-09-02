import { useAppSelector } from '@/hooks/hooks';
import { isLoggedInSelect } from '@/redux/auth/selectors';
import { LinkLogo, TextLogo, WrapperLogo } from './Logo.styled';
import { Icon } from '../svg/Svg';

type LogoProps = {
  variant?: string;
};

export const Logo = ({ variant }: LogoProps) => {
  const isLogin = useAppSelector(isLoggedInSelect);

  return (
    <WrapperLogo $variant={variant}>
      <LinkLogo to={isLogin ? '/recommended' : ''}>
        <Icon iconName="logo" variant="logo" />
        <TextLogo>READ JOURNEY</TextLogo>
      </LinkLogo>
    </WrapperLogo>
  );
};

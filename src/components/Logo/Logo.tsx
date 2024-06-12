import icon from '../../images/sprite.svg';
import { Logo, TextLogo, WrapperSvg } from './Logo.styled';
import { isLoggedInSelect } from '../../redux/auth/selectors';
import { useAppSelector } from '../../hooks/hooks';
import { Variant } from '../Header/UserNav/UserNav';
import { FC } from 'react';
export const LogoMain: FC<Variant> = ({ variant }: Variant) => {
  const isLogin = useAppSelector(isLoggedInSelect);
  return (
    <WrapperSvg $variant={variant}>
      <Logo>
        <use xlinkHref={icon + '#logo'}></use>
      </Logo>
      <TextLogo to={isLogin ? '/recommended' : ''}>READ JOURNEY</TextLogo>
    </WrapperSvg>
  );
};

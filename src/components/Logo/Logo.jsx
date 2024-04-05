import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import icon from '../../images/sprite.svg';
import { Logo, TextLogo, WrapperSvg } from './Logo.styled';
import { isLoggedInSelect } from '../../redux/auth/selectors';

export const LogoMain = ({ variant }) => {
  const isLogin = useSelector(isLoggedInSelect);
  return (
    <WrapperSvg variant={variant}>
      <Logo>
        <use xlinkHref={icon + '#logo'}></use>
      </Logo>
      <TextLogo to={isLogin ? '/recommended' : null}>READ JOURNEY</TextLogo>
    </WrapperSvg>
  );
};

LogoMain.propTypes = {
  variant: PropTypes.any,
};

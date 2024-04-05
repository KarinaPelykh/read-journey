import PropTypes from 'prop-types';
import { WrapperButton, Button, LinkOnLOgin } from './Button.styled';

export const Buttons = ({ prop, text, to, onClick, variant }) => {
  return (
    <WrapperButton>
      <Button onClick={onClick} variant={variant} type="submit">
        {prop}
      </Button>
      <LinkOnLOgin to={to}>{text}</LinkOnLOgin>
    </WrapperButton>
  );
};

Buttons.propTypes = {
  onClick: PropTypes.func,
  prop: PropTypes.any,
  text: PropTypes.string,
  to: PropTypes.string,
  variant: PropTypes.string,
};

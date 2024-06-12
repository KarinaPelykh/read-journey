import { To } from 'react-router-dom';
import { WrapperButton, Button, LinkOnLOgin } from './Button.styled';
import { FC } from 'react';
interface Buttons {
  onClick?: () => void;
  prop: string;
  text?: string;
  to?: string;
  variant?: string;
}
export const Buttons: FC<Buttons> = ({ prop, text, to, onClick, variant }) => {
  return (
    <WrapperButton>
      <Button onClick={onClick} $variant={variant} type="submit">
        {prop}
      </Button>
      <LinkOnLOgin to={to as string}>{text}</LinkOnLOgin>
    </WrapperButton>
  );
};

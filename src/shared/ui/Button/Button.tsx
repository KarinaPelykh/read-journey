import { WrapperButton, ReusableButton, LinkOnLOgin } from './Button.styled';

type Button = {
  onClick?: () => void;
  prop: string;
  text?: string;
  to?: string;
  variant?: string;
};

export const Buttons = ({ prop, text, to, onClick, variant }: Button) => {
  return (
    <WrapperButton>
      <ReusableButton onClick={onClick} $variant={variant} type="submit">
        {prop}
      </ReusableButton>
      <LinkOnLOgin to={to as string}>{text}</LinkOnLOgin>
    </WrapperButton>
  );
};

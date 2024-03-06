import { WrapperButton, Button, LinkOnLOgin } from "./Button.styled";

export const Buttons = ({ prop, text, to, onClick }) => {
  return (
    <WrapperButton>
      <Button onClick={onClick} type="submit">
        {prop}
      </Button>
      <LinkOnLOgin to={to}>{text}</LinkOnLOgin>
    </WrapperButton>
  );
};

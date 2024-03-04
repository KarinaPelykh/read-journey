import { WrapperButton, Button, LinkOnLOgin } from "./Button.styled";

export const Buttons = ({ prop, text, to }) => {
  return (
    <WrapperButton>
      <Button type="submit">{prop}</Button>
      <LinkOnLOgin to={to}>{text}</LinkOnLOgin>
    </WrapperButton>
  );
};

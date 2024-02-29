import { WrapperButton, Button, LinkOnLOgin } from "./Button.styled";

export const Buttons = ({ prop }) => {
  return (
    <WrapperButton>
      <Button type="submit">{prop}</Button>
      <LinkOnLOgin href="">Already have an account?</LinkOnLOgin>
    </WrapperButton>
  );
};

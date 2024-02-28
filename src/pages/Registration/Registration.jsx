import icon from "../../images/sprite.svg";
import {
  WrapperForm,
  WrapperSvg,
  Logo,
  TextLogo,
  Comment,
  Span,
  RegisterForm,
  Input,
  Button,
  LinkOnLOgin,
  InputPassword,
  WrapperButton,
} from "./Registratino.styled";

export const RegistrationPage = () => {
  return (
    <WrapperForm>
      <WrapperSvg>
        <Logo>
          <use xlinkHref={icon + "#logo"}></use>
        </Logo>
        <TextLogo>READ JOURNEY</TextLogo>
      </WrapperSvg>
      <Comment>
        Expand your mind, reading <Span>a book</Span>
      </Comment>
      <RegisterForm>
        <label></label>
        <Input name="name" type="text" placeholder="Name:" />
        <label></label>
        <Input name="email" type="email" placeholder="Mail:" />
        <label></label>
        <InputPassword
          name="password"
          type="password"
          placeholder="Password:"
        />
        <WrapperButton>
          <Button type="submit">Registration</Button>
          <LinkOnLOgin href="">Already have an account?</LinkOnLOgin>
        </WrapperButton>
      </RegisterForm>
    </WrapperForm>
  );
};

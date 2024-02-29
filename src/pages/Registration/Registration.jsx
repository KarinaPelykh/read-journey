import { Buttons } from "../../components/Button/Button";
import { Hero } from "../../components/Hero/Hero";
import { LogoMain } from "../../components/Logo/Logo";
import {
  Wrapper,
  WrapperForm,
  Comment,
  Span,
  RegisterForm,
  Input,
  InputPassword,
} from "./Registration.styled";

export const RegistrationPage = () => {
  return (
    <Wrapper>
      <WrapperForm>
        <LogoMain />
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
          <Buttons prop={"Registration"} />
        </RegisterForm>
      </WrapperForm>
      <Hero />
    </Wrapper>
  );
};

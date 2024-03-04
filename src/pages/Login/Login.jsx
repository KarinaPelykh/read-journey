import { Buttons } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container.styled";
import { Hero } from "../../components/Hero/Hero";
import { LogoMain } from "../../components/Logo/Logo";
import {
  Comment,
  Input,
  InputPassword,
  LoginForm,
  Span,
  WrapperForm,
  Wrapper,
} from "./Login.styled";

export const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperForm>
          <LogoMain />
          <Comment>
            Expand your mind, reading <Span>a book</Span>
          </Comment>
          <LoginForm>
            <label></label>
            <Input name="email" type="email" placeholder="Mail:" />
            <label></label>
            <InputPassword
              name="password"
              type="password"
              placeholder="Password:"
            />
            <Buttons
              prop={"Log in"}
              text={"Don’t have an account?"}
              to={"/register"}
            />
          </LoginForm>
        </WrapperForm>
        <Hero />
      </Wrapper>
    </Container>
  );
};

import { Comment, Span, WrapperForm, Wrapper } from './Login.styled';
import { LoginFormComp } from '../../components/LoginForm/LoginForm';
import { Hero } from '../../components/Hero/Hero';
import { LogoMain } from '../../components/Logo/Logo';

export const LoginPage = () => {
  return (
    <Wrapper>
      <WrapperForm>
        <LogoMain />
        <Comment>
          Expand your mind, reading <Span>a book</Span>
        </Comment>
        <LoginFormComp />
      </WrapperForm>
      <Hero />
    </Wrapper>
  );
};

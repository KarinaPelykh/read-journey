import { Comment, Span, WrapperForm, Wrapper } from './Login.styled';
import { LoginFormComp } from '../../components/LoginForm/ui/LoginForm';
import { Hero } from '../../components/Hero/Hero';
import { LogoMain } from '../../components/Logo/Logo';

export const LoginPage = () => {
  return (
    <Wrapper>
      <WrapperForm>
        <LogoMain variant="" />
        <Comment>
          Expand your mind, reading <Span>a book</Span>
        </Comment>
        <LoginFormComp />
      </WrapperForm>
      <Hero />
    </Wrapper>
  );
};

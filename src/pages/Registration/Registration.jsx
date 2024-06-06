import { Wrapper, WrapperForm, Comment, Span } from './Registration.styled';
import { RegistrationFromCopm } from '../../components/RegisterFrom/RegisterFrom';
import { Hero } from '../../components/Hero/Hero';
import { LogoMain } from '../../components/Logo/Logo';
export const RegistrationPage = () => {
  return (
    <Wrapper>
      <WrapperForm>
        <LogoMain />
        <Comment>
          Expand your mind, reading <Span>a book</Span>
        </Comment>

        <RegistrationFromCopm />
      </WrapperForm>
      <Hero />
    </Wrapper>
  );
};

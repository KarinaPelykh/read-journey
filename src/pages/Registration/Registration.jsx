import { Hero } from '../../components/Hero/Hero';
import { Wrapper, WrapperForm, Comment, Span } from './Registration.styled';
import { LogoMain } from '../../components/Logo/Logo';
import { RegistrationFromCopm } from '../../components/RegisterFrom/RegisterFrom';
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

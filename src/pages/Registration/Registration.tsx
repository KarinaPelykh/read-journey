import {
  Section,
  WrapperRegisterForm,
  Comment,
  Span,
} from './Registration.styled';
import { RegistrationFrom } from '../../components/RegisterFrom/RegisterFrom';
import { Hero } from '../../components/Hero/Hero';
import { LogoMain } from '../../components/Logo/Logo';

export const RegistrationPage = () => {
  return (
    <Section>
      <WrapperRegisterForm>
        <LogoMain />
        <Comment>
          Expand your mind, reading <Span>a book</Span>
        </Comment>

        <RegistrationFrom />
      </WrapperRegisterForm>
      <Hero />
    </Section>
  );
};

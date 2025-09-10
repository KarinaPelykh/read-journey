import { Logo } from '@/shared/ui/sign/Logo';
import { Main, Section } from './Registration.styled';
import { Hero } from '@/components/Hero/Hero';
import { RegistrationFrom } from '@/features/auth/register-from/RegisterFrom';
import { Text } from '@/shared/ui/content/Text';

export const RegistrationPage = () => {
  return (
    <Section>
      <Main>
        <Logo />
        <Text />
        <RegistrationFrom />
      </Main>
      <Hero />
    </Section>
  );
};

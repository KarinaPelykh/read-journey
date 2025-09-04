import { Logo } from '@/shared/ui/logo/Logo';
import { Main, Section } from './Registration.styled';
import { Text } from '@/shared/ui/text/Text';
import { Hero } from '@/components/Hero/Hero';
import { RegistrationFrom } from '@/features/auth/register-from/RegisterFrom';

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

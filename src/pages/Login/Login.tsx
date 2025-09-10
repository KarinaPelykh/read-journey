import { Main, Section } from './Login.styled';

import { Hero } from '@/components/Hero/Hero';
import { LoginFormComp } from '@/features/auth/login-form/ui/LoginForm';
import { Text } from '@/shared/ui/content/Text';
import { Logo } from '@/shared/ui/sign/Logo';

export const LoginPage = () => {
  return (
    <Section>
      <Main>
        <Logo />
        <Text />
        <LoginFormComp />
      </Main>
      <Hero />
    </Section>
  );
};

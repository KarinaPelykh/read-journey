import { Main, Section } from './Login.styled';

import { Hero } from '@/components/Hero/Hero';
import { LoginFormComp } from '@/features/auth/login-form/ui/LoginForm';
import { Logo } from '@/shared/ui/logo/Logo';

import { Text } from '@/shared/ui/text/Text';

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

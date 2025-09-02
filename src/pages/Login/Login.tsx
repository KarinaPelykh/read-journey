import { Main, Section } from './Login.styled';

import { LoginFormComp } from '@/components/LoginForm/ui/LoginForm';
import { Hero } from '@/components/Hero/Hero';

import { Logo } from '@/shared/ui/Logo/Logo';
import { Text } from '@/shared/ui/Text/Text';

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

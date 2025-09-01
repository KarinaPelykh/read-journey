import { LogoMain } from '@/shared/ui/Logo/Logo';
import { Main, Section } from './Registration.styled';
import { Text } from '@/shared/ui/Text/Text';
import { RegistrationFrom } from '@/components/RegisterFrom/RegisterFrom';
import { Hero } from '@/components/Hero/Hero';

export const RegistrationPage = () => {
  return (
    <Section>
      <Main>
        <LogoMain />
        <Text />
        <RegistrationFrom />
      </Main>
      <Hero />
    </Section>
  );
};

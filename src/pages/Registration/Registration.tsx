import { Section, Main } from './Registration.styled';
import { RegistrationFrom } from '../../components/RegisterFrom/RegisterFrom';
import { Hero } from '../../components/Hero/Hero';
import { LogoMain } from '../../shared/ui/Logo/Logo';
import { Text } from '../../shared/ui/Text/Text';

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

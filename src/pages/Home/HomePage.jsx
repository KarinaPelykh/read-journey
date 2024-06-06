import { useEffect, useRef, useState } from 'react';
import { DivAnimation, Text } from './HomePage.style';
import BIRDS from 'vanta/dist/vanta.birds.min';
import { Container } from '../../components/Container/Container.styled';

export const HomePage = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x141414,
          color1: 0xae0000,
          color2: 0xd1ff,
          colorMode: 'variance',
          wingSpan: 40.0,
          separation: 100.0,
          alignment: 25.0,
          cohesion: 19.0,
          quantity: 4.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Container ref={myRef}>
      <DivAnimation id="my-background">
        <Text>WELCOME ON BOOK APP</Text>
      </DivAnimation>
    </Container>
  );
};

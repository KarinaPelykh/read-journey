import { ReactNode } from 'react';

type Element = {
  children: ReactNode;
};
export const Container = ({ children }: Element) => {
  return <Container>{children}</Container>;
};

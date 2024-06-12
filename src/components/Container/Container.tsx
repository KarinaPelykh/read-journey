import { FC, ReactNode } from 'react';

interface Element {
  children: ReactNode;
}
export const Container: FC<Element> = ({ children }) => {
  return <Container>{children}</Container>;
};

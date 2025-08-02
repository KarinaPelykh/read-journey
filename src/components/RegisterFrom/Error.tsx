import { ReactNode } from 'react';
import { TextError } from './RegisterFrom.styles';

type ErrorProps = {
  children: ReactNode;
  name: 'name' | 'password' | 'email';
  formik: {
    touched: { [key: string]: boolean };
    errors: { [key: string]: string };
  };
};

export const Error = ({ children, formik, name }: ErrorProps) => {
  return formik?.touched[name] && formik?.errors[name] ? (
    <TextError>{children}</TextError>
  ) : (
    <TextError />
  );
};

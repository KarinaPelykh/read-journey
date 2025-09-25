import { Buttons } from '@/shared/ui/btn/Button';
import { useState } from 'react';

import { DivWrapperInput, Label, LoginForm } from './LoginForm.styled';

import { useLoginFormSubmit } from '../api/useLoginFormSubmit';

import { PasswordInput } from '@/shared/ui/password-input/PasswordInput';
import { ValidationAuth } from '@/shared/ui/ValidationAuth';
import { ShowPassword } from '@/shared/ui/ShowPassword';
import { Error } from '@/shared/ui/error-message/Error';
import { Input } from '@/shared/ui/entry/Input';

export const LoginFormComp = () => {
  const [showPsw, setShowPsw] = useState(true);

  const formik = useLoginFormSubmit();

  return (
    <LoginForm onSubmit={formik.handleSubmit} autoComplete="off">
      <DivWrapperInput>
        <Label>Mail:</Label>
        <Input
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Your@email.com"
        />
        <Error formik={formik} name="email">
          {formik.errors.email}
        </Error>
      </DivWrapperInput>
      <DivWrapperInput>
        <Label>Password:</Label>
        <PasswordInput
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Your password here"
          $variant={
            !formik.touched.password
              ? 'default'
              : !formik.errors.password
              ? 'successful'
              : 'error'
          }
          type={showPsw ? 'password' : 'text'}
        />
        <ValidationAuth
          touched={formik.touched.password}
          errors={formik.errors.password}
        />
        <ShowPassword showPsw={showPsw} toggle={() => setShowPsw(!showPsw)} />
        <Error formik={formik} name="password">
          {formik.errors.password}
        </Error>
      </DivWrapperInput>
      <Buttons
        prop="Log In"
        text="Don’t have an account?"
        to="/register"
        variant="loginWrapper"
      />
    </LoginForm>
  );
};

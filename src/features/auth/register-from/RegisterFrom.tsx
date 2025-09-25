import { useState } from 'react';
import { Buttons } from '@/shared/ui/btn/Button';

import { RegisterForm, DivWrapperInput, Label } from './RegisterFrom.styles';

import { useRegisterFormikSubmit } from './api/useRegisterFormikSubmit';

import { PasswordInput } from '@/shared/ui/password-input/PasswordInput';
import { ValidationAuth } from '@/shared/ui/ValidationAuth';
import { ShowPassword } from '@/shared/ui/ShowPassword';
import { Input } from '@/shared/ui/entry/Input';
import { Error } from '@/shared/ui/error-message/Error';

export const RegistrationFrom = () => {
  const formik = useRegisterFormikSubmit();

  const [showPsw, setShowPsw] = useState(true);

  return (
    <RegisterForm onSubmit={formik.handleSubmit} autoComplete="off">
      <DivWrapperInput>
        <Label htmlFor="name">Name:</Label>
        <Input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="Ilona Ratushniak"
        />
        <Error formik={formik} name="name">
          {formik.errors.name}
        </Error>
      </DivWrapperInput>
      <DivWrapperInput>
        <Label htmlFor="email">Mail:</Label>
        <Input
          onChange={formik.handleChange}
          name="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          type="email"
          placeholder="Your@email.com"
        />
        <Error formik={formik} name="email">
          {formik.errors.email}
        </Error>
      </DivWrapperInput>
      <DivWrapperInput>
        <Label htmlFor="password">Password:</Label>
        <PasswordInput
          $variant={
            !formik.touched.password
              ? 'default'
              : !formik.errors.password
              ? 'successful'
              : 'error'
          }
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          name="password"
          type={showPsw ? 'password' : 'text'}
          placeholder="Your password here"
        />
        <ValidationAuth
          touched={formik.touched.password}
          errors={formik.errors.password}
        />
        <ShowPassword showPsw={showPsw} toggle={() => setShowPsw(!showPsw)} />
        <Error formik={formik} name="email">
          {formik.errors.password}
        </Error>
      </DivWrapperInput>

      <Buttons
        prop="Registration"
        text="Already have an account?"
        to="/login"
        variant="wrapper"
      />
    </RegisterForm>
  );
};

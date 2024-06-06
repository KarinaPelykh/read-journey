import { useFormik } from 'formik';
import { Buttons } from '../Button/Button';
import * as Yup from 'yup';
import { useState } from 'react';
import { ValidationRegister } from '../Validation/ValidationRegister';
import { ShowPassword } from '../Validation/ShowPassword';
import { loginThunk } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  DivWrapperInput,
  Input,
  InputPassword,
  Label,
  LoginForm,
  TextError,
} from './LoginForm.styled';
import { useAppDispatch } from '../../hooks/hooks';

export const LoginFormComp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [openPsw, setOpenPsw] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          'You have wrong email, try again'
        )
        .required('Required'),
      password: Yup.string()
        .min(7, 'Enter a valid Password*')
        .max(12, 'Enter a valid Password*')
        .required('Required'),
    }),
    onSubmit: value => {
      dispatch(loginThunk(value))
        .unwrap()
        .then(() => {
          navigate('/recommended');
          toast.success('You already login', {
            position: 'top-right',
            hideProgressBar: true,
            theme: 'dark',
          });
        })
        .catch(() => toast.error('Something went worn.Try again!'));
    },
  });
  return (
    <>
      <LoginForm onSubmit={formik.handleSubmit}>
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
        </DivWrapperInput>

        <DivWrapperInput>
          <Label>Password:</Label>
          <InputPassword
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Yourpasswordhere"
            $variant={
              formik.errors.password
                ? 'error'
                : formik.touched.password
                ? 'successful'
                : null
            }
            type={openPsw ? 'password' : 'text'}
          />
          <ValidationRegister
            touched={formik.touched.password}
            errors={formik.errors.password}
          />
          <ShowPassword
            openPAsword={openPsw}
            toggle={() => setOpenPsw(prevState => !prevState)}
          />
        </DivWrapperInput>
        {formik.touched.password && formik.errors.password ? (
          <TextError>{formik.errors.password}</TextError>
        ) : null}
        <Buttons
          prop={'Log in'}
          text={'Don’t have an account?'}
          to={'/register'}
        />
      </LoginForm>
    </>
  );
};

import { useState } from 'react';
import { Buttons } from '../Button/Button';
import { ShowPassword } from '../Validation/ShowPassword';
import { ValidationRegister } from '../Validation/ValidationRegister';
import {
  RegisterForm,
  Input,
  InputPassword,
  DivWrapperInput,
  TextErrors,
  TextError,
  Label,
} from './RegisterFrom.styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerThunk } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../hooks/hooks';
export const RegistrationFromCopm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [openPsw, setOpenPsw] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
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

    onSubmit: values => {
      dispatch(registerThunk(values))
        .unwrap()
        .then(() => {
          navigate('/recommended');
          toast.success('You already registration ', {
            position: 'top-right',
            hideProgressBar: true,
            theme: 'dark',
          });
        })
        .catch(() => {
          toast.error('Something went worn.Try again!');
        });
    },
  });

  return (
    <RegisterForm onSubmit={formik.handleSubmit}>
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
        {formik.touched.name && formik.errors.name ? (
          <TextError>{formik.errors.name}</TextError>
        ) : null}
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
        {formik.touched.email && formik.errors.email ? (
          <TextError>{formik.errors.email}</TextError>
        ) : null}
      </DivWrapperInput>
      <DivWrapperInput>
        <Label htmlFor="password">Password:</Label>

        <InputPassword
          $variant={
            formik.errors.password
              ? 'error'
              : formik.touched.password
              ? 'successful'
              : null
          }
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          name="password"
          type={openPsw ? 'password' : 'text'}
          placeholder="Yourpasswordhere"
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
        <TextErrors>{formik.errors.password}</TextErrors>
      ) : null}
      <Buttons
        prop={'Registration'}
        text={'Already have an account?'}
        to={'/login'}
      />
    </RegisterForm>
  );
};

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { registerThunk } from '../../../redux/auth/operations';
import { useAppDispatch } from '../../../hooks/hooks';

import { registrationScheme } from '../module/contract';

export const useRegisterFormikSubmit = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: registrationScheme,

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
  return formik;
};

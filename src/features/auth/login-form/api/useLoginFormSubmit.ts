import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { LoginScheme } from '../module/contract';
import { loginThunk } from '@/redux/auth/operations';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { toast } from 'react-toastify';

export const useLoginFormSubmit = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: LoginScheme,

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

  return formik;
};

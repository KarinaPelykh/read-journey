import * as Yup from 'yup';

export const LoginScheme = Yup.object({
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
});

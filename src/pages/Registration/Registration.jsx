import { Buttons } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container.styled";
import { Hero } from "../../components/Hero/Hero";
import { LogoMain } from "../../components/Logo/Logo";
import {
  Wrapper,
  WrapperForm,
  Comment,
  Span,
  RegisterForm,
  Input,
  InputPassword,
  S,
} from "./Registration.styled";
import { useFormik } from "formik";
import * as Yup from "yup";

export const RegistrationPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string()
        .matches(
          /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          "You have wrong email, try again"
        )
        .required("Required"),
      password: Yup.string()
        .min(7, "Enter a valid Password*")
        .max(12, "Enter a valid Password*")
        .required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container>
      <Wrapper>
        <WrapperForm>
          <LogoMain />
          <Comment>
            Expand your mind, reading <Span>a book</Span>
          </Comment>
          <RegisterForm onSubmit={formik.handleSubmit}>
            <label htmlFor="name"></label>
            <Input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Name:"
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}

            <label htmlFor="email"></label>
            <Input
              onChange={formik.handleChange}
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              type="email"
              placeholder="Mail:"
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <label htmlFor="password"></label>
            <InputPassword
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              name="password"
              type="password"
              placeholder="Password:"
            />

            {formik.touched.password && formik.errors.password ? (
              <S>{formik.errors.password}</S>
            ) : null}

            <Buttons prop={"Registration"} />
          </RegisterForm>
        </WrapperForm>
        <Hero />
      </Wrapper>
    </Container>
  );
};

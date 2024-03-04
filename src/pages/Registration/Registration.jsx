import { useState } from "react";
import { Buttons } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container.styled";
import { Hero } from "../../components/Hero/Hero";
import { LogoMain } from "../../components/Logo/Logo";
import { ShowPassword } from "../../components/Validation/ShowPassword";
import { ValidationRegister } from "../../components/Validation/ValidationRegister";
import {
  Wrapper,
  WrapperForm,
  Comment,
  Span,
  RegisterForm,
  Input,
  InputPassword,
  DivWrapperInput,
  TextErrors,
  TextError,
  Label,
} from "./Registration.styled";
import { useFormik } from "formik";
import * as Yup from "yup";

export const RegistrationPage = () => {
  const [openPsw, setOpenPsw] = useState(true);
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

    onSubmit: () => {
      // values;
      // const { name, email, password } = values;
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
            <DivWrapperInput>
              {" "}
              <Label htmlFor="name">Name:</Label>
              <Input
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
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
              />
              {formik.touched.email && formik.errors.email ? (
                <TextError>{formik.errors.email}</TextError>
              ) : null}
            </DivWrapperInput>
            <DivWrapperInput>
              <Label htmlFor="password">Password:</Label>

              <InputPassword
                // $variant={
                //   formik.errors.password
                //     ? "error"
                //     : formik.touched.password
                //     ? "successful"
                //     : null
                // }
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                name="password"
                type={openPsw ? "password" : "text"}
              />

              <ValidationRegister
                touched={formik.touched.password}
                errors={formik.errors.password}
              />
              <ShowPassword
                openPAsword={openPsw}
                toggle={() => setOpenPsw((prevState) => !prevState)}
              />
            </DivWrapperInput>

            {formik.touched.password && formik.errors.password ? (
              <TextErrors>{formik.errors.password}</TextErrors>
            ) : null}
            <Buttons
              prop={"Registration"}
              text={"Already have an account?"}
              to={"/login"}
            />
          </RegisterForm>
        </WrapperForm>
        <Hero />
      </Wrapper>
    </Container>
  );
};

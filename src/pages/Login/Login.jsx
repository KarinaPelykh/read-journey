import { useFormik } from "formik";
import { Buttons } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container.styled";
import { Hero } from "../../components/Hero/Hero";
import { LogoMain } from "../../components/Logo/Logo";
import * as Yup from "yup";
import {
  Comment,
  Input,
  InputPassword,
  LoginForm,
  Span,
  WrapperForm,
  Wrapper,
} from "./Login.styled";
import { useState } from "react";
import { ValidationRegister } from "../../components/Validation/ValidationRegister";
import { ShowPassword } from "../../components/Validation/ShowPassword";
import {
  DivWrapperInput,
  TextErrors,
} from "../Registration/Registration.styled";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openPsw, setOpenPsw] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
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
    onSubmit: (value) => {
      console.log(value);
      dispatch(loginThunk(value))
        .unwrap()
        .then(() => navigate("/"));
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
          <LoginForm onSubmit={formik.handleSubmit}>
            <label></label>
            <Input
              name="email"
              type="email"
              placeholder="Mail:"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <label></label>
            <DivWrapperInput>
              <InputPassword
                name="password"
                placeholder="Password:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                $variant={
                  formik.errors.password
                    ? "error"
                    : formik.touched.password
                    ? "successful"
                    : null
                }
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
              prop={"Log in"}
              text={"Don’t have an account?"}
              to={"/register"}
            />
          </LoginForm>
        </WrapperForm>
        <Hero />
      </Wrapper>
    </Container>
  );
};

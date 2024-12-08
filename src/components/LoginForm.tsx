import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "../App.css";

const LoginForm: React.FC = () => {
  const initialValues = { email: "", password: "", rememberMe: false };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values: typeof initialValues) => {
    if (values.rememberMe) {
      localStorage.setItem("email", values.email);
    }
    alert("Login Successful");
    console.log(values);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div className="form-group">
            <label>
              <Field type="checkbox" name="rememberMe" />
              Remember Me
            </label>
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import "../App.css";

const SignUpForm: React.FC = () => {
  const initialValues = { email: "", password: "" };
  const [passwordStrength, setPasswordStrength] = useState("");

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const onSubmit = (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    alert("Sign Up Successful");
    console.log(values);
    resetForm();
  };

  const assessPasswordStrength = (password: string) => {
    let strength = "Weak";
    if (
      password.length > 8 &&
      /[A-Z]/.test(password) &&
      /[\d]/.test(password)
    ) {
      strength = "Strong";
    } else if (password.length > 5) {
      strength = "Medium";
    }
    setPasswordStrength(strength);
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue("password", e.target.value);
                  assessPasswordStrength(e.target.value);
                }}
              />
              <ErrorMessage name="password" component="div" className="error" />
              <div className="password-strength">{passwordStrength}</div>
            </div>
            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;

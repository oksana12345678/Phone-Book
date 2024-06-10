import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import * as Yup from "yup";

const LoginForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const contactsSchema = Yup.object().shape({
    email: Yup.string()
      .min(6, "Too Short!")
      .max(30, "Too Long!")
      .required("Required!"),
    password: Yup.string()
      .min(5, "Too Short!")
      .max(30, "Too Long!")
      .required("Required!"),
  });
  const handleSubmit = (values, action) => {
    const { email, password } = values;
    dispatch(logIn({ email, password }))
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });
    action.resetForm();
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={contactsSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor={emailId}>Email</label>
          <Field type="email" name="email" id={emailId} />
          <ErrorMessage
            name="email"
            component="p"
            placeholder="Enter your email!"
          />
        </div>
        <div>
          <label htmlFor={passwordId}>Password</label>
          <Field
            type="password"
            name="password"
            id={passwordId}
            placeholder="Enter your password!"
          />
          <ErrorMessage name="password" component="p" />
        </div>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
export default LoginForm;

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";

const RegistrationForm = () => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .min(5, "too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(5, "too Short!")
      .max(30, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, action) => {
    const { name, email, password } = values;
    dispatch(
      register({
        name,
        email,
        password,
      })
    
    );
    console.log(name, email, password);
    action.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={registerSchema}
    >
      <Form>
        <div>
          <label htmlFor={nameId}> Username</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="p" />
        </div>
        <div>
          <label htmlFor={emailId}>Email</label>
          <Field type="email" name="email" id={emailId} />
          <ErrorMessage name="email" component="p" />
        </div>
        <div>
          <label htmlFor={passwordId}>Password</label>
          <Field type="password" name="password" id={passwordId} />
          <ErrorMessage name="password" component="p" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;

import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectUser } from "../../redux/auth/selectors";

const showToast = (message, type) => {
  toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: type === "success" ? "light" : "colored",
    type: type,
  });
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const formNameId = useId();
  const formNumberId = useId();
  const { name } = useSelector(selectUser);

  const contactsSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(9, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => {
        showToast("Contact add successful!", "success");
        actions.resetForm();
      })
      .catch(() => {
        showToast("Contact add failed!", "error");
      });
  };

  return (
    <div className={css.container}>
      <p className={css.welcome}>Welcome, {name}</p>

      <Formik
        className={css.contactForm}
        validationSchema={contactsSchema}
        onSubmit={handleSubmit}
        initialValues={{ name: "", number: "" }}
      >
        <Form className={css.contactForm}>
          <div className={css.inputContainer}>
            <label htmlFor={formNameId}>Name</label>
            <Field
              className={css.nameInput}
              id={formNameId}
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.inputContainer}>
            <label htmlFor={formNumberId}>Number</label>
            <Field
              className={css.nameInput}
              id={formNumberId}
              type="tel"
              name="number"
              placeholder="Enter your phone number"
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <button className={css.buttonSubmit} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
console.log(1);
setTimeout(() => {
  console.log(2);
}, 100);
setTimeout(() => {
  console.log(3);
}, 0);

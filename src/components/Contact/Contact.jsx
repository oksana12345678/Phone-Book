import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { changeContact } from "../../redux/contacts/operations";
import { Field, Form, Formik } from "formik";
import { FaPencil } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import { openModal } from "../../redux/modalWindow/slice";
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

export default function Contact({ contact: { _id, name, phoneNumber } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(openModal(_id));
  };

  const handleChange = (values) => {
    const { name, phoneNumber } = values;
    dispatch(changeContact({ _id, name, phoneNumber }))
      .unwrap()
      .then(() => {
        showToast("Edit success!", "success");
      })
      .catch(() => {
        showToast("Edit failed!", "error");
      });
  };

  return (
    <>
      <Formik
        initialValues={{ name: name, phoneNumber: phoneNumber }}
        onSubmit={handleChange}
      >
        <Form className={css.listItemContainer}>
          <label className={css.listItemPice}>
            <FaUser /> <Field className={css.contactName} name="name" />
          </label>
          <label className={css.listItemPice}>
            <FaPhone />
            <Field className={css.contactName} name="phoneNumber" />
          </label>
          <div className={css.buttonContainer}>
            <button className={css.buttonChange} type="submit">
              <FaPencil />
              Update
            </button>
            <button
              className={css.deleteButton}
              type="button"
              onClick={handleDelete}
            >
              <MdDeleteForever size={20} /> Delete
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

import { useDispatch } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";
import { toast } from "react-toastify";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";

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

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {})
      .catch(() => {
        showToast("Ups something went wrong!", "error");
      });
  }, [dispatch]);
  return (
    <>
      <DocumentTitle>Your Contacts</DocumentTitle>
      <div className={css.container}>
        <div>
          <ContactForm />
          <SearchBox />
        </div>

        <div className={css.contactsListContainer}>
          <ContactList />
          <ConfirmModal />
        </div>
      </div>
    </>
  );
};
export default ContactsPage;

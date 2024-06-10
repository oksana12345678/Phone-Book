import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { selectLoading } from "../../redux/contacts/selectors";
import Loading from "../../components/Loading/Loading";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <ContactList />
      <div>{isLoading && <Loading />}</div>
    </div>
  );
};
export default ContactsPage;

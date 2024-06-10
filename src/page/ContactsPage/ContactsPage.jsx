import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { selectLoading } from "../../redux/contacts/selectors";
import Loading from "../../components/Loading/Loading";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import SearchBox from "../../components/SearchBox/SearchBox";
const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <DocumentTitle>Your Contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <div>{isLoading && <Loading />}</div>
    </div>
  );
};
export default ContactsPage;

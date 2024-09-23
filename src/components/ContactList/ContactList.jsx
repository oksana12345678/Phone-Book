import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {contacts.map((contact) => {
          return (
            <li className={css.listItem} key={contact._id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;

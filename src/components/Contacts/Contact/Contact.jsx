import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FaPencil } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { editModal, openModal } from "../../../redux/modalWindow/slice";
import EditModal from "../../modalWindows/EditModal/EditModal";
import ConfirmModal from "../../modalWindows/ConfirmModal/ConfirmModal";
import { selectEditContactId } from "../../../redux/modalWindow/selectors";

import { RxAvatar } from "react-icons/rx";

export default function Contact({ id, name, phoneNumber }) {
  const dispatch = useDispatch();

  const contactId = useSelector(selectEditContactId);

  const handleDelete = () => {
    dispatch(openModal(id));
  };
  const handleEdit = () => {
    dispatch(editModal(id));
  };

  return (
    <>
      <RxAvatar className={css.avatar} />
      <div className={css.listItemContainer}>
        <div className={css.buttonContainer}>
          <button
            className={css.buttonChange}
            type="button"
            onClick={handleEdit}
          >
            <FaPencil className={css.editIcon} />
          </button>
          <button
            className={css.deleteButton}
            type="button"
            onClick={handleDelete}
          >
            <MdDeleteForever className={css.deleteIcon} />
          </button>
        </div>
        <div className={css.valuesContainer}>
          <p className={css.listItemPice}>
            <FaUser className={css.icon} />
            {name}
            {/*  <span className={css.contactName}></span> */}
          </p>
          <p className={css.listItemPice}>
            <FaPhone className={css.icon} />
            {phoneNumber}
            {/* <span className={css.contactName}></span> */}
          </p>
        </div>
      </div>
      {contactId === id && (
        <EditModal
          contactId={contactId}
          name={name}
          phoneNumber={phoneNumber}
        />
      )}
      <ConfirmModal />
    </>
  );
}

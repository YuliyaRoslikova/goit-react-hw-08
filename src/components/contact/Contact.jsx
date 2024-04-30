import { FaPhoneAlt } from 'react-icons/fa';
import { RiContactsFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.fieldContainer}>
        <div className={css.field}>
          <RiContactsFill className={css.icon} />
          <p>{name}</p>
        </div>
        <div className={css.field}>
          <FaPhoneAlt className={css.icon} />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;

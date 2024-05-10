import { useSelector } from 'react-redux';
import {
  selectContactsError,
  selectContactsLoading,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';
import Contact from '../contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const contactsError = useSelector(selectContactsError);
  const contactsLoading = useSelector(selectContactsLoading);

  return (
    <div className={css.item}>
      {contactsError && <p>ERROR!</p>}
      {contactsLoading && <p>LOADING...</p>}
      {!contactsLoading &&
        !contactsError &&
        filteredContacts.map(contact => {
          return (
            <Contact key={contact.id} name={contact.name} number={contact.number} id={contact.id} />
          );
        })}
    </div>
  );
};

export default ContactList;

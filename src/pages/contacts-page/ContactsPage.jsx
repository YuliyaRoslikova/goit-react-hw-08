import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/document-title/DocumentTitle';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContactsLoading } from '../../redux/contacts/selectors';
import ContactForm from '../../components/contact-form/ContactForm';
import ContactList from '../../components/contact-list/ContactList';
import SearchBox from '../../components/search-box/SearchBox';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Phone numbers</DocumentTitle>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default ContactsPage;

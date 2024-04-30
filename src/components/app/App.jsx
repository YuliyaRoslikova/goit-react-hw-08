import { useEffect } from 'react';
import ContactForm from '../contact-form/ContactForm';
import ContactList from '../contact-list/ContactList';
import SearchBox from '../search-box/SearchBox';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phone book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;

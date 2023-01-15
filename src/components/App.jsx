import PropTypes from 'prop-types';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { SelectError } from 'redux/selectors';


const App = () => {
 const error = useSelector(SelectError)
  
  return (
    <>{error === null ? <div className={css.container}>
    <h1 className={css.title}>Phonebook</h1>
    
    <ContactForm />
    
    <h2 className={css.contacts}>Contacts</h2>
    
    <Filter />
    
    <ContactList />
    </div> : <h2>{error.message}</h2>}</>

    
  );
};

App.propTypes = {
  addContact: PropTypes.func,
  handleFilter: PropTypes.func,
  renderContacts: PropTypes.func,
  deleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default App;

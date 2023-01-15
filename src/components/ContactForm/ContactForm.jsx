import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts_operations';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts_operations';

import { SelectContacts } from 'redux/selectors';

const ContactForm = () => {
  let [name, setName] = useState('');
  let [phone, setphone] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(SelectContacts);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName((name = value));
        break;
      case 'phone':
        setphone((phone = value));
        break;
      default:
    }
  };

  const addNewContact = newContact => {
    const findContact = contacts.find(
      contact =>
        contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );
    if (findContact) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  const submitHandler = event => {
    event.preventDefault();
    addNewContact({ name, phone });

    setName((name = ''));
    setphone((phone = ''));
  };

  return (
    <form className={css.form} onSubmit={submitHandler}>
      <label className={css.label}>
        <span className={css.name}>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label className={css.label}>
        <span className={css.number}>Number</span>
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone}
          onChange={handleChange}
          required
        />
      </label>
      <button className={css.button}>Add contact</button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  addContact: PropTypes.func,
  submitHandler: PropTypes.func,
  handleChange: PropTypes.func,
};

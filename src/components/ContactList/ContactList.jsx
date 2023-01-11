import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import  deleteContact  from 'redux/contacts/contactsSlise';
import { SelectGetContacts } from 'redux/selectors';


export const ContactList = () => {

  const contacts = useSelector(SelectGetContacts);
  const filterItem = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  
    const renderContacts = () => {
    const renderedContacts = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filterItem.trim().toLowerCase());
    });
    return renderedContacts;
  };
  const render = renderContacts();

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {render.map(a => {
        return (
          <li key={a.id}>
            <ContactItem
              name={a.name}
              number={a.number}
              itemKey={a.id}
              deleteContact={deleteContacts}
            />
          </li>
        );
      })}
    </ul>
  );
};

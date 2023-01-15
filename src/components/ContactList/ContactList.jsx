import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import {deleteContact} from 'redux/contacts/contacts_operations';
import { SelectContacts, SelectFilter, SelectIsLoading } from 'redux/selectors';


export const ContactList = () => {
 

  const contacts = useSelector(SelectContacts);
  const filterItem = useSelector(SelectFilter);
  const isLoading = useSelector(SelectIsLoading)
  const dispatch = useDispatch();


  

  const renderContacts = () => {
    const renderedContacts = contacts.filter(contact => {
      return contact.name
      .toLowerCase().includes(filterItem.trim().toLowerCase());
    });
    return renderedContacts;
  };




  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
{isLoading ? <p>Loading...</p> : <ul className={css.list}>
{renderContacts().map(a => {
  return (
 
    <li key={a.id}>
      <ContactItem
   
        name={a.name}
        number={a.phone}
        itemKey={a.id}
        deleteContact={deleteContacts}
      />
    </li>
  );
})}
</ul>}
</>
   
  );
};

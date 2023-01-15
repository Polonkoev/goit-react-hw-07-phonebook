import css from './ContactItem.module.css';

export const ContactItem = ({ name, number, itemKey, deleteContact }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      <li key={itemKey}>
        <p className={css.name}>Name: {name}</p>
        <p className={css.number}>Phone number: {number}</p>
        <button className={css.button} onClick={() => deleteContact(itemKey)}>
          Delete
        </button>
      </li>
    </ul>
  );
};

import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
// import { filterContacts } from 'redux/filter/filterSlice';
import { filterContacts } from 'redux/filter/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = ({ target: { value } }) => {
    dispatch(filterContacts(value));
  };

  return (
    <label className={css.label}>
      <span className={css.title}>Find contacts by name</span>
      <input
        name="name"
        type="text"
        title={'Start typing the contact name..'}
        placeholder="Start typing the contact name.."
        onChange={handleFilter}
      />
    </label>
  );
};

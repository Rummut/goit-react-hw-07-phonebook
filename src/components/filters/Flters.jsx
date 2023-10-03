import { Input } from 'components/contact-form/ContactForm.styled';

import { filterContact } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
export const Filters = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = newFilter => {
    dispatch(filterContact(newFilter));
  };
  return (
    <Input
      type="text"
      value={filter}
      name="filter"
      placeholder="Write to filter name"
      onChange={event => changeFilter(event.target.value.toLowerCase().trim())}
    />
  );
};

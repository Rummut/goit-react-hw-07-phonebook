import { Button, Item, List } from './ContactList.styled';
import { deleteContact } from 'redux/contactSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteContact(contact.id));
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

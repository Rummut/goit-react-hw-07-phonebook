import { Button, Item, List, threeDots } from './ContactList.styled';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {isLoading && threeDots}
      {error && <b>{error}</b>}
      {!isLoading &&
        visibleContacts.map(contact => (
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

// import { useEffect, useState } from 'react';
import { ContactList } from './contact-list/ContactList';
import { ContactForm } from './contact-form/ContactForm';
import { Filters } from './filters/Flters';
import { Container, Title, TitleContact } from './App.styled';
import { GlobalStyle } from 'GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm></ContactForm>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <TitleContact>Contacts</TitleContact>
      <Filters></Filters>
      <ContactList></ContactList>
      <GlobalStyle />
    </Container>
  );
};

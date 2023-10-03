// import { useEffect, useState } from 'react';
import { ContactList } from './contact-list/ContactList';
import { ContactForm } from './contact-form/ContactForm';
import { Filters } from './filters/Flters';
import { Container, Title, TitleContact } from './App.styled';
import { GlobalStyle } from 'GlobalStyle';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm></ContactForm>
      <TitleContact>Contacts</TitleContact>
      <Filters></Filters>
      <ContactList></ContactList>
      <GlobalStyle />
    </Container>
  );
};

import React from 'react';


import { ContactForm } from '../ContactForm';
import { ContactList } from '../ContactList';
import { Wallet } from '../Wallet';

export const Home = () => (
  <>
    <Wallet />
    <ContactForm />
    <ContactList />
  </>
);
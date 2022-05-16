import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';
const addContact = createAction('contacts/addContact', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/deleteContact');

const changeFilter = createAction('contacts/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };

import { nanoid } from 'nanoid';
import actionTypes from './contacts-types';

const addContact = (name, number) => ({
  type: actionTypes.ADD,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };

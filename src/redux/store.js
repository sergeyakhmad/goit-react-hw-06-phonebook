// import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reduser';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;

// configureStore() Создай хранилище
// createAction() Создай действия сохранения и удаления контакта, а также обновления фильтра. Используй функцию
// createReducer() Создай редюсеры контактов и фильтра
// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

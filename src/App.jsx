import ContactsList from './components/ContactsList/ContactsList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <h1 className={s.phoneBook}>PhoneBook</h1>
      <ContactForm />
      <h2 className={s.contacts}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}

// export default function App() {
//   const [contacts, setContacts] = useLocalStorage('contacts', []);
//   const [filter, setFilter] = useState('');

//   const addContact = (name, number) => {
//     if (
//       contacts.some(
//         contact => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       return alert(`${name} is already in contacts.`);
//     }

//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     setContacts(prev => [contact, ...prev]);
//   };

//   const deleteContact = contactId => {
//     setContacts(prev => prev.filter(contact => contact.id !== contactId));
//   };

//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const visibleContacts = contacts.filter(contact =>
//     contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
//   );

//   return (
//     <div className={s.container}>
//       <h1 className={s.phoneBook}>PhoneBook</h1>
//       <ContactForm onSubmit={addContact} />
//       <h2 className={s.contacts}>Contacts</h2>
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactsList
//         contacts={visibleContacts}
//         onDeleteContact={deleteContact}
//       />
//     </div>
//   );
// }

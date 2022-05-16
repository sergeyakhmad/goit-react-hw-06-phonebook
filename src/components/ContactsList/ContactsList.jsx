import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import contactsActions from 'redux/contacts/contacts-actions';
import { getVisibleContacts } from 'redux/contacts/contacts-selector';
import s from './ContactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <span className={s.name}>{name}: </span>
          <span className={s.number}>{number}</span>
          <button
            type="button"
            className={s.button}
            onClick={() => dispatch(contactsActions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });
// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

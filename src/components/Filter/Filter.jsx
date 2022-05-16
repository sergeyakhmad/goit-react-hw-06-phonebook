import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selector';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.field}>
      <span className={s.text}>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

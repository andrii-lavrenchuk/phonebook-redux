import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteConact } from "../../redux/slices/sontactSlice";

const ContactList = () => {
  const conatcs = useSelector((state) => state.contacts);

  const filter = useSelector((state) => state.filter);

  const visibleContacts = conatcs.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    dispatch(deleteConact(id));
  };

  return (
    <>
      {visibleContacts.length === 0 && <p>There are no contacts</p>}
      <ul>
        {visibleContacts.map((contact) => (
          <li key={contact.id}>
            <span>{contact.name}</span>
            <span>{contact.number}</span>
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

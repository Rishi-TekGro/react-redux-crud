// Modal.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../feature/actions';

const Modal = ({ user, onClose }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [id, setId] = useState(user ? user.id : '');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const handleSave = () => {
    // Dispatch the editUser action here
    dispatch(editUser({  id, updatedUserData: { name, email } }));
    // onClose(); // Close the modal after saving
  };

  useEffect(() => {
    if (user) {
      setId(user.id);
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>User Details</h2>
        {user && (
          <div style={{ border: "1px solid red" }}>
            <p>ID: {id}</p>
            <p>Name: <input type='text' value={name} onChange={handleNameChange} /></p>
            <p>Email: <input type='email' value={email} onChange={handleEmailChange} /></p>
            <button onClick={handleSave}>Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

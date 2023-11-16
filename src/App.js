// App.js
import './App.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, addUser, deleteUser } from './feature/actions';
import Modal from './pages/Modal';


function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // To store the selected user data

  const handleLiClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []); 


  const handleAddUser = () => {
    // Check if users[0] is defined before accessing its length property
    const lastUserId = users.users ? users.users[users.users.length - 1].id + 1 : 0;

    console.log(lastUserId);
    dispatch(addUser({ id: lastUserId, name,email,password }));
  };

  const handelDelete=(user)=>{

    dispatch(deleteUser({id:user.id}))

  }

  if (users.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (users.status === 'failed') {
    return <p>Error: {users.error}</p>;
  }

  return (
    <div className="App">
      <h1>User List</h1>
      <ul>
  {users.users.map((user) => (
    <li key={user.id}>
    id:{user.id}
      Name: {user.name}, Email: {user.email}
   
      Date: {new Date(user.created_at).toLocaleDateString('en-GB')}
      <button onClick={() => handleLiClick(user)}>Edit</button>
      <button onClick={() => handelDelete(user)}>Delete</button>

    </li>
  ))}
</ul>
    {isModalOpen && (
        <Modal user={selectedUser} onClose={handleCloseModal} />
      )}

      Name:
      <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type='text' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleAddUser}>Add</button>
    </div>
  );
}

export default App;

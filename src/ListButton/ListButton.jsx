import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './ListButton.css';
export default function ListButton({users, setUsers, isOpen, setIsOpen}) {
    const [hiddenUsers, setHiddenUsers] = useState([])
    const [editingUser, setEditingUser] = useState(null);

    function handleOpen () {
        setIsOpen();
    }

    function deleteUser(userId) {
        setHiddenUsers([...hiddenUsers, userId]);
        }

    function handleEdit(user) {
            setEditingUser(user);
        }

    function handleSave(userId, updatedUser) {
        setUsers(users.map(user => (user.id === userId ? updatedUser : user)))
        setEditingUser(null);
    }

      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(result => result.json())
          .then(response => setUsers(response));
      }, [setUsers]);

      
  return (
    <div className="list-wrapper">
      <button type="button" className="list_button" onClick={ handleOpen}>
        List
      </button>
      {isOpen && (
        <div className="list-container">
          {users.map(user => (
            <div key={user.id} className={`list-element ${hiddenUsers.includes(user.id) ? 'hidden' : ''}`}>
                {editingUser && editingUser.id === user.id ? (
                    <div>
                        <input type="text" value={editingUser.name} onChange={(element) => setEditingUser({...editingUser, name: element.target.value})} />
                        <input type="text" value={editingUser.phone} onChange={(element) => setEditingUser({...editingUser, phone: element.target.value})} />
                        <input type="text" value={editingUser.email} onChange={(element) => setEditingUser({...editingUser, email: element.target.value})} />
                        <button type="button" onClick={() => handleSave(user.id, editingUser)}>Save</button>
                    </div>
                ) : (
                <div>
              <span className="info-element">Name: {user.name}</span>
              <span className="info-element">Phone: {user.phone}</span>
              <span className="info-element">Email: {user.email}</span>
              <span className="info-element">Id: {user.id}</span>
              <button type="button" onClick={() => deleteUser(user.id)}>Delete</button>
              <button type='button' className='edit-button' onClick={() => handleEdit(user)}>Edit</button>
              </div>
          )}
          </div>
      ))}
    </div>
  )}
  </div>
  );
}

import React from 'react'
import { useState } from 'react';
import './../App/App.css';
export default function AddUserButton({ users, setUsers, isOpen, setIsOpen, openList}) {
    const [newUserName, setNewUserName] = useState('');
    const [newUserPhone, setNewUserPhone] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');

    function handleOpen () {
        setIsOpen();
    }

    function handleAddUser() {
        const newUser = {
            id: users.length + 1,
            name: newUserName,
            phone: newUserPhone,
            email: newUserEmail
        };
        setUsers([...users, newUser]);
        setNewUserName('');
        setNewUserPhone('');
        setNewUserEmail('');
        setIsOpen(false);
        openList();
        console.log(`${newUserName} has been added`);
    }
  return (
    <div>
        <button type="button" onClick={handleOpen}>Add User</button>
        {isOpen && (
            <div className='add-inputs-container'>
                <input type="text" placeholder='Name' className='input-add-element' value={newUserName} onChange={(element) => setNewUserName(element.target.value)}/>
                <input type="text" placeholder='Phone' className='input-add-element' value={newUserPhone} onChange={(element) => setNewUserPhone(element.target.value)}/>
                <input type="text" placeholder='Email' className='input-add-element' value={newUserEmail} onChange={(element) => setNewUserEmail(element.target.value)}/>
                <div className='button-container'>
                <button type="button" onClick={handleAddUser}>Add</button>
                <button type="button" onClick={openList}>Cancel</button>
                </div>
            </div>
        )}
    </div>
  )
}

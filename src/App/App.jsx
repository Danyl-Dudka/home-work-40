import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import ListButton from '../ListButton/ListButton'
import AddUserButton from '../AddUserButton/AddUserButton'
function App() {
  const [users, setUsers] = useState(0);
  const [isListOpen, setIsListOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);

  function openList() {
    setIsListOpen(true);
    setIsAddOpen(false);
  }

  function openAdd() {
    setIsListOpen(false);
    setIsAddOpen(true);
  }

      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(result => result.json())
          .then(response => setUsers(response));
      }, [setUsers]);
  
  return (
        <div className='button-container'>
           <ListButton users={users} setUsers={setUsers} isOpen={isListOpen} setIsOpen={openList}/>
           <AddUserButton users={users} setUsers={setUsers} isOpen={isAddOpen} setIsOpen={openAdd} openList={openList}/>
    </div>
  )
}

export default App

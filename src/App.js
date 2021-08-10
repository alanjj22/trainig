import './App.css';
import React,{useState} from 'react'
import AddUsers from './Components/Users/addUsers';
import UserList from './Components/Users/UserList';

function App() {

  const [usersList, setusersList] = useState([]);

  const addUserHandler = (uName,uAge) =>{
    setusersList((prevList)=>{
      return [...prevList,{name:uName, age:uAge}]})
  }

  return (
    <div>
      <AddUsers onAddUsers={addUserHandler}/>
      <UserList users={usersList} />
    </div>
  );
}

export default App;

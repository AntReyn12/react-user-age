import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const getUserData = (enteredData) => {
    console.log(enteredData);
    setUserList((prevData) => {
      return [...prevData, enteredData];
    });
    console.log(userList);
  };

  return (
    <div>
      <AddUser onAddUser={getUserData} />
      <UserList users={userList} />
    </div>
  );
};

export default App;

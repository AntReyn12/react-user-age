import React from "react";
import Card from "../UI/Card";
import "./AddUser.css";

const AddUser = () => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
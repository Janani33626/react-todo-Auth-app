import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ToDos = () => {
  const auth = useSelector((state) => state.auth);

  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  if (!auth._id) return <Navigate to="/signiin" />;

  return (
    <>
      <AddTodo todo={todo} setTodo={setTodo} />
      <ListTodo setTodo={setTodo} />
    </>
  );
};

export default ToDos;

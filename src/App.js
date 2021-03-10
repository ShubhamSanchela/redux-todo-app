import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css"

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handleClick = (id) =>
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  if (!todos || !todos.length) {
    return <p className="data">NO TODO</p>;
  }
  return (
    <ul className="list-data">
      {todos.map((todo) => (
        <li  onClick={ () => handleClick(todo.id)}>{todo.label}</li>
      ))}
    </ul>
  );
};

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();

  const handle = (event) => {
    setNewTodo(event.target.value);
  };

  const handleClick = () =>
    dispatch({
      type: "ADD_TODO",
      payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
      },
    });
  return (
    <>
      <input type="text" value={newTodo} onChange={handle} />
      <br/>
      <button className="btn btn-primary mt-2" onClick={handleClick}>Add Todo</button>
    </>
  );
};

function App() {
  return (
    <div className="App" style={{textAlign : "center"}}>
      <Todos />
      <TodoInput />
    </div>
  );
}

export default App;

import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContextProvider = createContext();

const getLocalStorage = () =>{
    let localTodos = localStorage.getItem('todos')
    console.log(localTodos)
    if(localTodos){
      return (JSON.parse(localTodos))
    }
    else{
      return []
    }
}

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState(getLocalStorage);
  const [item, setItem] = useState("");
  const [updateId, setUpdateId] = useState(null);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
    console.log('local storage set')
  },[todos])

  const AddItem = () => {
    if (item.length > 0) {
      setTodos([...todos, { id: uuidv4(), todo: item, time: Date().toLocaleString() }]);
    }
    setItem("");
  };

  const UpdateItem = () => {
    const updatedTodo = todos.map((todo) =>
      todo.id === updateId ? { id: todo.id, todo: item, time: Date() } : todo
    );
    setTodos(updatedTodo);
    setItem("");
    setUpdateId(null);
  };

  const DeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const UpdateTodo = (id) => {
    setUpdateId(id);
  };

  const values = {
    todos,
    setTodos,
    item,
    setItem,
    AddItem,
    UpdateTodo,
    DeleteTodo,
    UpdateItem,
    updateId,
    setUpdateId,
  };

  return (
    <TodoContextProvider.Provider value={values}>
      {children}
    </TodoContextProvider.Provider>
  );
};

export default TodoContext;
export { TodoContextProvider };

import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      if (editIndex !== null) {
        //updating the todo at specified index
        setTodos((prevTodos) => {
          const updatedTodos = [...prevTodos];
          updatedTodos[editIndex] = newTodo;
          return updatedTodos;
        });
        setEditIndex(null);
      } else {
        //not updatind directly adding
        setTodos((prevTodos) => [...prevTodos, newTodo]);
      }
      setNewTodo("");
    }
  };
  const startEdit = (index) => {
    setNewTodo(todos[index]); // Set the input value to the todo being edited
    setEditIndex(index); // Set the editIndex to the current todo index
  };
  const cancelEdit = () => {
    setNewTodo(""); // Clear the input
    setEditIndex(null); // Clear editIndex
  };

  const removeTodo = (indexToremove) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo, index) => index !== indexToremove);
    });
  };
  return (
    <div className="text-center mt-8 ">
      <h2 className="text-3xl font-sans font-bold mb-4 text-gray-700">
        Todo List
      </h2>
      <div>
        <input
          className="w-96 rounded border border-gray-400 py-2 px-1 bg-gray-800 mr-1 
          text-base text-white border-none"
          type="text"
          placeholder="Enter your todo list"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="text-2xl font-sans font-bold border rounded py-0.5 px-4 bg-slate-400 border-none mr-1"
          onClick={addTodo}
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
        {editIndex !== null && (
          <button
            onClick={cancelEdit}
            className="text-2xl font-sans font-bold border rounded py-0.5 px-4 bg-red-400 border-none"
          >
            Cancel
          </button>
        )}
      </div>
      <div className="mt-4">
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="border rounded py-2 bg-gray-800 text-white 
              max-w-5xl m-auto text-lg mb-2 flex justify-between "
            >
              {todo}
              <div>
                <button
                  onClick={() => startEdit(index)}
                  className="pr-4 font-sans font-bold text-slate-300 "
                >
                  Edit
                </button>
                <button
                  onClick={() => removeTodo(index)}
                  className="pr-3 text-red-500 font-sans font-bold"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;

import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

export default function Todolist() {
  //state array which hold all todos
  const [todos, setTodos] = useState([]);

  //Add todo to list
  const addTask = (task) => {
    if (!task.text) {
      return
    }
    const newTodos = [task, ...todos];
    setTodos(newTodos);
  }

  // Remove todo frome list
  const removeTask = id => {
    let updatedTask =  [...todos].filter(task => task.id !== id)
    setTodos(updatedTask)
  }

  // Task is completed
  const completeTask = id => {
    let updatedTask = todos.map(todo => {
      if(todo.id === id) {
        todo.isComplete = true;
      }
      return todo;
    })
    // console.log(updatedTask)
    setTodos(updatedTask)
  }

  return (
    <div>
      <TodoForm addTask={addTask}></TodoForm>
      <Todo todos={todos} completeTask={completeTask} removeTask={removeTask} ></Todo>
    </div>
  )
}

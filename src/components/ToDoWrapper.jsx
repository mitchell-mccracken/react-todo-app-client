import React, { useState } from 'react';
import { ToDoForm } from './ToDoForm';
import { ToDo } from './ToDo';
import { v4 as uuidv4 } from 'uuid';

uuidv4()    // call to initialize

export const ToDoWrapper = () => {

  const [ todos, setTodos ] = useState( [] );

  const addTodo = ( todo ) => {

    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false
    };

    setTodos([...todos, newTodo]);
  };

  const toggleComplete = ( id ) => {

    const _todos = todos.map( x => {
      if ( x.id === id ) x.completed = !x.completed;
      return x;
    } );

    setTodos( _todos );
  };

  const removeTodo = ( id ) => {
    const _todos = todos.filter( x => x.id !== id );
    setTodos( _todos );
  };

  return (
    <div className='todo-wrapper'>
      <h1>To Do List:</h1>
      <ToDoForm addTodo={ addTodo } />
      {/* <ToDo /> */}

      {todos.map( (todo, idx) => (
        <ToDo 
          task={todo} 
          key={idx} 
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}

    </div>
  )
}

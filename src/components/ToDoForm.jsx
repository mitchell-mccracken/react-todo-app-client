import React, { useState } from 'react'

export const ToDoForm = ( { addTodo } ) => {
  const [value, setValue] = useState('');

  const changeFunc = (e) => { setValue(e.target.value) };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo( value )
    setValue('');   // clear value
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className='todo-input' 
        placeholder='what is the task today'
        onChange={changeFunc}
        value={value}
      />
      <button type='submit' className='todo-btn'>
        add task
      </button>
    </form>
  )
}

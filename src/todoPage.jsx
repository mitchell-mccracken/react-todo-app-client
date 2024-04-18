import { ToDoWrapper } from "./components/ToDoWrapper";
import { useState } from 'react';
import NavBar from "./navBar";




function TodoPage() {
  // let count = 0;
  const [ count, setCount ] = useState(0);

  const func = () => { setCount(count + 1) };

  return (
    <div id='todo-page'>
      <NavBar />
      <div className="header" id="mitch-page-wrapper">
        <span>span 1</span>
        <span>span 2</span>
        <button onClick={func}>Click me</button>
        <span>count: {count} </span>

        <br></br>
        <div>
          <ToDoWrapper/>
        </div>
      </div>
    </div>
    
  );
}


export default TodoPage;
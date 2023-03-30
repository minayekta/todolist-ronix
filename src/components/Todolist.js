import React, { useState } from 'react'
import './Todolist.css'
Todolist.propTypes = {}

function Todolist(props) {
  const [count, setCount] = useState('');
  const [todoList, setTodoList] = useState([]);

  let hangeOnchange = (e) => {
    let item = e.target.value
    setCount(item);
  }
  let addTodo = (e) => {
    setTodoList(prevTodoValue =>
        prevTodoValue.concat({ value: count })
      );
      setCount("");
  }
  return (
    <div className="container-xxl px-0">
      <div className="row mx-0">
        <h1 className='col-12 mt-5 date'>
            Today
            </h1>
        <div className='col-12'>
        {new Date().toLocaleDateString()}
        </div>
        <div className="col-12 mt-4">
        <input
              placeholder="add to do ..."
              className="py-2 px-2 border-primary border"
              onChange={(e) => hangeOnchange(e)}
              value={count}
            />
            <button className='py-2 px-2 ms-2 border-0' onClick={() => addTodo()}>add</button>
        </div>
     
          <div className="mt-4 col-4 text-center m-auto">
            {todoList.map(
              (item, index) =>
                item.value && (
                    <div className="card px-0 m-auto h-auto mt-1">
                    <div className="card-body text-start">
                      <li>
                    {item.value}
                    {item.isChecked && ' cross'}
                  </li>
                    </div>
                    </div>
                  
                ),
            )}
          </div>
        
      </div>
    </div>
  )
}

export default Todolist

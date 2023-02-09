import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { Header } from './Header'
import "./Style.css"
import Todo from './Todo';

function Main() {
     const [todoList, setTodoList] = useState(["Developed by Ritez"]);
     const [todo, setTodo] = useState("");
     const [isEmpty, setIsEmpty] = useState(true);
     const [isEdit, setIsEdit] = useState(false);
     const [indexOfEditItem, setIndexOfEditItem] = useState(null);
     const inputRef = useRef();



     const saveEdit = () => {
          const temp = [...todoList]
          temp[indexOfEditItem] = todo
          setTodoList(todos => temp);
          setIsEdit(false);
          setTodo("")
     }

     useEffect(() => {
          inputRef.current.focus() 
     }, [indexOfEditItem])


     useEffect(() => {
          todo.length > 0 ? setIsEmpty(false) : setIsEmpty(true);
     }, [todo])

     const handleChange = (e) => {
          setTodo(e.target.value);
          console.log(todo)
     }

     const handleAdd = () => {
          setTodoList(todos => [...todos, todo])
          setTodo("")
          setIsEdit(false)
          console.log(todoList)
     }

     const handleRemove = (index) => {
          setIsEdit(false)
          setTodoList(todos => {
               const newTodo = todos.filter((val, ind) => {
                    return ind !== index
               })
               return newTodo;
          })
          setTodo("")
     }

     const handleEdit = (index) => {
          setIsEdit(true);
          setTodo(todo => todoList[index])
          setIndexOfEditItem(index);
     }



     return (
          <div>
               < Header />
               {/* *************************************** */}

               <div className='container'>


                    <div className='input-group'>
                         <input ref={inputRef} onChange={(e) => { handleChange(e) }} value={todo} className='input-element task' type="text" placeholder='Add Task' />
                         <button disabled={isEmpty} onClick={() => {

                              isEdit ? saveEdit() : handleAdd()

                         }} className={isEdit ? "save-btn" : "btn"}>
                              {
                                   isEdit ? "Save" : "Add"
                              }
                         </button>

                    </div>
                    {

                         isEmpty ? <small style={{ fontSize: "1rem", textAlign: "start", color: "#D61355" }}>write something ,don't keep empty...</small>
                              : isEdit ? <small style={{ fontSize: "1rem", textAlign: "start", color: "greenyellow" }} >editing task {indexOfEditItem + 1}</small> : ""
                    }

                    <div>
                         {
                              todoList.map((item, index) => {
                                   return <Todo indexOfEditItem={indexOfEditItem} isEdit={isEdit} item={item} remove={handleRemove} edit={handleEdit} index={index} />
                              })
                         }
                    </div>
               </div>

          </div>
     )
}

export default Main;
import React from 'react'
import TodoList from './TodoList'
import {useSelector} from 'react-redux'
import "./App.css"


function List() {
    
    const {todoArray}  = useSelector(state => state);




    
    const list = todoArray.map(                             //todo리스트 출력
        item => (
           <li  className ="ul" key = {item.id}>
               <TodoList todo = {item.todo} id = {item.id}>
                {item}
               </TodoList>
               </li>
        )
    );

    return (
        <ul>
            {list}
        </ul>
    )
}

export default List
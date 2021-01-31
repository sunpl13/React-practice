import {React} from 'react'
import List from './List'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, onChange} from './redux'
import './App.css'



function Todo() {


    const {todoArray}  = useSelector(state => state);
    const dispatch = useDispatch();


    const onClick = () => {                 // 배열에 추가할 함수 생성
        dispatch(addTodo());

        
    }
    console.log(todoArray);



    const change = e => {                 //input 값 변경 함수
        dispatch(onChange(e.target.value));
    }

    return (
        <div>
            <div className = "IPbox">
                <input className="input" type = "text" onChange = {change}/>
                <button className ="button" onClick = {onClick}>추가</button>
                <br/><br/>
            </div>
            <div className = "List">
                <List/>
            </div>
        </div>
        
    
    )
    
}

export default Todo
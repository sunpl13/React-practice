import {React, useState} from 'react'
import {useDispatch} from 'react-redux'
import {deleteTodo, changeTodo} from './redux'
import './App.css'


function TodoList(props) {

    const dispatch = useDispatch();

    
    const [state, setstate] = useState(false)
    const [data, setdata] = useState("")

    const onchange = (e) => {                       //Input 값 변경
        setdata(e.target.value)
    }

    const changedo = () => {                      //버튼 클릭 시 바뀐 값으로 변경 후 토글(state)값 반전
        dispatch(changeTodo(props.id, data));
        setstate(!state)
    }

    const toggleChange = () => {                    // 수정을 위한 버튼 토글
        setstate(!state)
    }


    return (
        <div>
            {state ? (<><input className = "input" value = {data} onChange = {onchange} ></input> <button className = "button" onClick = {changedo}>완료</button></>) : (props.todo)}
            <button className = "button" onClick = {() => toggleChange()}>수정</button>
            <button className = "button" onClick = {() => dispatch(deleteTodo(props.id))}>삭제</button>
            
        </div>
    )
}

export default TodoList

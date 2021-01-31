import {createStore} from 'redux'
import {todoList} from './redux'

const store = createStore(todoList)

export default store;
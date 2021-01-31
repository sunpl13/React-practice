import './App.css';
import Todo from './Todo'
import {Provider} from 'react-redux'
import store from './Store'

function App() {

  

  return (
    <Provider store = {store}>
    <div className = "center">
      <div className = "Title">
      해야 할 일
      <br/>
      
      </div>
      <Todo/>
    </div>
    </Provider> 
  );
}

export default App;

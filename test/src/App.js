import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Component
function App() {

    // State
    const [value, setValue] = useState('');
    // Event
    const onChange = (e) => setValue(e.target.value);
    const onClick = () => {
        console.log(value);
        if(!value){
            alert('아무것도 없다 이것아')
        }
    }
    // JSX


  return (
    <div className="App">
        <h1>ToDoList</h1>
        <hr/>
        <input value={value} onChange={onChange} />
        <button onClick={onClick}>확인</button>
    </div>
  );
}

export default App;

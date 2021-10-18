import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//component
function App() {
  
  //State
  const [value, setValue] = useState('');

  //Event
  const onChange = (e) => setValue(e.target.value);
  const onClick = (value) => {
    console.log(value);
  }


  
  // JSX
  return (
    <div className="App">
      <h1>TodoList</h1>
      <input value={value} onChange={onChange} />
      <button value={value} onClick={onClick}>Click</button>
    
    </div>
  );
}

export default App;

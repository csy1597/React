import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//component
function App() {
  
  //State
  const [value, setValue] = useState('');

  //Event
  const onChange = (e) => setValue(e.target.value);


  
  // JSX
  return (
    <div className="App">
      <h1>TodoList</h1>
      <input value={value} onChange={onChange} />
    
    </div>
  );
}

export default App;

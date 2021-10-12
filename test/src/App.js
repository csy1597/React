import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Component
function App() {

    // State
    const [value, setValue] = useState('');
    // Event
    const onChange = (e) => setValue(e.target.value);
    // JSX


  return (
    <div className="App">
        <h1>ToDoList</h1>
    </div>
  );
}

export default App;

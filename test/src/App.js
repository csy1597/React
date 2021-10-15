import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Component
function App() {

    // State
    const [value, setValue] = useState('');
    // Event
    
    // JSX


  return (
    <div className="App">
      <h1>게시판</h1>
      <input value={value} onChange={onChange} />
        
    </div>
  );
}

export default App;

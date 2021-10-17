import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//component
function App() {
  
  //State
  const [value, setValue] = useState('');
  //Event
  const onChange = (e) => setValue(e.target.value);
  const onClick = () => {
    console.log(value);
    if(!value){
      alert('아무것도 없어요 !!!');
      return;
    }
  }
  // JSX
  return (
    <div className="App">
      <h1> todo list </h1>
      <input value={value} onChange={onChange} />
      <button value={value} onClick={onClick} />
    </div>
  );
}

export default App;

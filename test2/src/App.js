import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//component
function App() {
  
  //State
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  //Event
  const onChange = (e) => setValue(e.target.value);
  const onClick = () => {
    console.log(value);
    if(!value){
      alert('아무것도 없어요 !!!');
      return;
    }
    setList((prevState) => [...prevState, value]);
    setValue('');
  }
  // JSX
  return (
    <div className="App">
      <h1> todo list </h1>
      <input value={value} onChange={onChange} />
      <button value={value} onClick={onClick}>Click</button>
    </div>
  );
}

export default App;

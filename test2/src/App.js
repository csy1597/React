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
  const onClick = (value) => {
    console.log(value);
    if(!value){
      alert('아무것도 없습니다.!');
      return;
    };
    setList((prevState) => [...prevState, value]);
    setValue('');
  }
  


  
  // JSX
  return (
    <div className="App">
      <h1>TodoList</h1>
      <input value={value} onChange={onChange} />
      <button value={value} onClick={onClick}>Click</button>
      {list.map((item, index) =>(
        <div>
          <input key={item} readOnly />
          
        </div>
      ))}
    
    </div>
  );
}

export default App;

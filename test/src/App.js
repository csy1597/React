import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Component
function App() {

    // State
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    // Event
    const onChange = (e) => setValue(e.target.value);
    const onClick = () => {
      console.log(value);
      if(!value){
        alert('아무것도 입력이 되지 않았습니다.')
      }
      setList((prevState) => [...prevState, value]);
      setValue('');

    }
    // JSX


  return (
    <div className="App">
      <h1>게시판</h1>
      <input value={value} onChange={onChange} />
      <button value={value} onClick={onClick} >입력</button>
    </div>
  );
}

export default App;

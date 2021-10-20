import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//component
function App() {
  
  //State
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [inputId, setInputId] = useState('');


  //Event
  const onChange = (e) => setValue(e.target.value);
  const onClick = () => {
    console.log(value);
    if(!value){
      alert('아무것도 없습니다.!');
      return;
    };
    setList((prevState) => [...prevState, value]);
    setValue('');
  }
  const onEdit = (index) => {
    console.log(index);

    const editText = prompt();
    console.log(editText);
    if(!editText){
      alert('다시 입력해 주세요!!!');
      return;
    }
    
    setList((prevState)=>{
      const editList = prevState.map((item, i)=>{
        return i === index ? editText:item;
      });
      return editList;
    });
  };
  const onDelete = (index) => {
    console.log(index);

    setList((prevState)=>{
      const deleteList = prevState.filter((item, i)=>{
        return i!== index&&item;
      });
      return deleteList;
    });
  };
  const onInputId = (e) => {
    console.log(inputId)
    setInputId(e.target.value);
  }


  
  // JSX
  return (
    <div className="App">
      <h1>TodoList</h1>
      <input value={value} onChange={onChange} />
      <button onClick={onClick}>Click</button>
      {list.map((item, index) =>(
        <div key={index}>
          <input value={item} readOnly />
          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={()=> onDelete(index)}>Delete</button>
        </div>
      ))}
      <p>input text</p>
      <input type="text" value={inputId} placeholder="ID를 입력하시오" onChange={onInputId} />
    
    </div>
  );
}

export default App;

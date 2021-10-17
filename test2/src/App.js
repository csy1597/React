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
  const onClick = () =>{
    console.log(value);
    if(!value){
      alert("아무것도 없어요!!");
      return;
    }
    setList((prevState)=> [...prevState, value]);
    setValue('');
  }
  const onEdit = (index)=>{
    console.log(index);

    const editText = prompt();
    console.log(editText);
    if(!editText){
      alert('다시 입력해주세요!');
      return;
    }
    setList((prevState)=>{
      const editList = prevState.map((item, i) => {
        return i === index ? editText:item;
      });
      return editList;
    });
  }


  
  // JSX
  return (
    <div className="App">
      <h1>todoList</h1>
      <input value={value} onChange={onChange} />
      <button value={value} onClick={onClick}>Click</button>
      <hr/>
      {list.map((item, index)=>(
        <div key={index}>
          <input value={item} readonly />
          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={() => onDelete(index)}></button>

        </div>
      ))}
    </div>
  );
}

export default App;

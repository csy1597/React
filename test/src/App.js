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
        return 
      }
      setList((prevState) => [...prevState, value]);
      setValue('');

    }
    const onEdit = (index) => {
      console.log(index);

      const editText = prompt();
      console.log(editText);

      setList((prevState)=>{
        const editList =prevState.map((item,i) =>{
          return i === index ? editText:item;
        })
        return editList;
      });
    };
    
    const onDelete = (index) => {
      console.log(index);

      setList((prevState)=>{
        const deleteList = prevState.filter((item, i)=>{
          return i !== index&& item;
        });
        return deleteList;
      });
    };

    // JSX
    return (
      <div className="App">
        <h1>게시판</h1>
        <input value={value} onChange={onChange} />
        <button value={value} onClick={onClick} >입력</button>
        {list.map((item, index)=>(
          <div key={index}>
            <input value={item} readOnly />
            <button onClick={ ()=> onEdit(index)}>재입력</button>
            <button onClick={ ()=> onDelete(index)}>삭제</button>
          </div>
        ))}
      </div>
    );
}

export default App;

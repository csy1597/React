import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//component
function App() {
  
  //State
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isRadio, setIsRadio] = useState('');
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [selected, setSelected] = useState('');
  const selectList = ['------','Apple', 'Dell' ,'SamSung', 'LG', 'HP'];
  const [textArea, setTextArea] = useState('');
  const [fileupload, setFileupload] = useState('');


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
    console.log(onInputId);
    setInputId(e.target.value);
  }
  const onInputPw = (e)=>{
    console.log(onInputPw);
    setInputPw(e.target.value);
  }
  const onSubClick = () =>{
    console.log('입력완료');
  }
  const checkOnchange= (e) =>{
    console.log(!isChecked);
    setIsChecked(e.target.value);
  }
  const radioOnchange = (e)=>{
    console.log(!isRadio);
    setIsRadio(!isRadio);
  }
  const onUserId = (e) => {
    console.log(onUserId);
    setUserId(e.target.value);
  }
  const clickSubmit = (e)=>{
    e.preventDefault();
    console.log(userId, userPw);
  }
  const onUserPw = (e) => {
    console.log(onUserPw);
    setUserPw(e.target.value);
  }
  const onSelect = (e) =>{
    setSelected(e.target.value);
    console.log(selected);
    return;
  }
  const onTextArea = (e) => setTextArea(e.target.value);
  console.log(textArea);
  const textReset = () => {
    setTextArea('');
  };
  const onFileupload = (e) => setFileupload(e.target.value);
  console.log(fileupload);

  


  
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
      <hr/>
      <p>input text</p>
      <input type="text" value={inputId} placeholder="ID를 입력하시오" onChange={onInputId} />
      <p>input password</p>
      <input type="password" value={inputPw} placeholder="Password를 입력하시오" onChange={onInputPw} /><br/><br/>
      <button type="submit" onClick={onSubClick}>입력</button>
      <hr/>
      <p>check box</p>
      <label>
        <input type="checkbox" value={isChecked} checked={isChecked} name="framework" onChange={checkOnchange} />
        벤츠
      </label><br/>
      <label>
        <input type="checkbox" value={isChecked} checked={isChecked} name="framework" onChange={checkOnchange} />
        BMW
      </label>
      <hr/>
      <p>Radiobutton</p>
      <label>
        <input type="radio" value={isRadio} id="radio1" onChange={radioOnchange} />
        집
      </label>
      <label>
        <input type="radio" value={isRadio} id="radio2" onChange={radioOnchange} />
        차
      </label>
      <hr/>
      <p>Form Tag</p>
      <form onSubmit={clickSubmit}>
        <input value={userId} type="text" placeholder="ID" onChange={onUserId} />
        <input value={userPw} type="password" placeholder="PW" onChange={onUserPw} />
        <input type="submit" value="로그인" />
      </form>
      <hr/>
      <p>Select Box</p>
      <select value={selected} onChange={onSelect}>
        {selectList.map((item)=>(
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <hr/>
      <p>TextArea</p>
      <form onSubmit={onSubClick}>
        <textarea type="text" value={textArea} onChange={onTextArea} />
        <button onClick={onTextArea}>Sunmit</button>
        <button type="reset" onClick={textReset}>Reset</button>
      </form>
      <hr/>
      <p>FileUpLoad</p>
      <input type="file" value={fileupload} onChange={onFileupload} />
      <button type="submit">전송</button>

    </div>
  );
}

export default App;

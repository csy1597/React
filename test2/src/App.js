import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { isElement } from 'react-dom/test-utils';

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
  const [user, setUser] = useState('');
  const [table, setTable] = useState('');
  const siteList = ["--선택--", "네이버", "다음", "네이트", "구글"];
  const [click, setClick] = useState('');
  const [userName, setUserName] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [callBook, setCallBook] = useState('');
  const [callList, setCallList] = useState([]);
  const [count, setCount] = useState(0);
  const [selBox, setSelbox] = useState('');
  const selboxList = ['MacBook', 'Gram', 'Samsung'];
  const [laptop, setLaptop] = useState('');




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
  };
  const onInputPw = (e)=>{
    console.log(onInputPw);
    setInputPw(e.target.value);
  };
  const onSubClick = () =>{
    console.log('입력완료');
  };
  const checkOnchange= (e) =>{
    console.log(!isChecked);
    setIsChecked(e.target.value);
  };
  const radioOnchange = (e)=>{
    console.log(!isRadio);
    setIsRadio(!isRadio);
  };
  const onUserId = (e) => {
    console.log(onUserId);
    setUserId(e.target.value);
  };
  const clickSubmit = (e)=>{
    e.preventDefault();
    console.log(userId, userPw);
  };
  const onUserPw = (e) => {
    console.log(onUserPw);
    setUserPw(e.target.value);
  };
  const onSelect = (e) =>{
    setSelected(e.target.value);
    console.log(selected);
    return;
  };
  const onTextArea = (e) => setTextArea(e.target.value);
  console.log(textArea);
  const textReset = () => {
    setTextArea('');
  };
  const onFileupload = (e) => setFileupload(e.target.value);
  console.log(fileupload);

  const onUser = (e) => setUser(e.target.value);
  console.log(user);
  const userReset = () => {
    setUser('');
  };
  const onTable = (e)=> {
    setTable(e.target.value);
    console.log(table);
    return;
  };
  const onDbClick = (e) => setClick(e.target.value);
  const onDbButton = () => {
    console.log(click);
    if(!click){
      alert('입력해주세요!');
    }
  };
  const userNameChange = (e) => {
    console.log(userName);
    const regexName = /^[a-z\b -]{0,30}$/
    if(regexName.test(e.target.value)){
      setUserName(e.target.value);
    }
  };
  const inputNumberChange = (e) => {
    console.log(inputNumber);
    const regexNumber = /^[0-9\b -]{0,11}$/
    if(regexNumber.test(e.target.value)){
      setInputNumber(e.target.value);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userName, inputNumber);
  };
  const onCallBook = (e) => {
    console.log(callBook);
    const callRegex = /^[0-9\b -]{0,11}$/
    if(callRegex.test(e.target.value)){
      setCallBook(e.target.value);
    }
  };
  const addCallBook = () => {
    console.log(callBook);
    if(!callBook){
      alert("put your phone number");
      return;
    }
    setCallList((prevState) => [...prevState, callBook]);
    setCallBook('');    
  }
  const oncallEdit = (index) => {
    console.log(value);
    const callEdit = prompt();
    console.log(callEdit);
    setCallList((prevState)=>{
      const callEditList = prevState.map((item,i)=>{
        return i===index? callEdit:item;
      });
      return callEditList;
    });
  };
  const oncallDelete = (index) => {
    console.log(index);
    setCallList((prevState)=>{
      const callDeleteList = prevState.filter((item, i)=>{
        return i!==index&&item;
      });
      return callDeleteList;
    });
  };
  const onCount = (e) =>{
    console.log(count);
    setCount(e.target.value);
    return;
  };
  const onSelBox = (e) =>{
    console.log(selBox);
    setSelbox(e.target.value);
  }
  const onLaptop = (e) => {
    console.log(laptop);
    setLaptop(e.target.value);
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
        <input type="radio" value={isRadio} id="집" onChange={radioOnchange} />
        집
      </label>
      <label>
        <input type="radio" value={isRadio} id="차" onChange={radioOnchange} />
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
      <p>fileupload</p>
      <input type="file" value={fileupload} onChange={onFileupload} />
      <button type="submit">전송</button>
      <hr/>
      <p>A tag</p>
      <a href="http://www.github.com" target="_blank" rel="noreferrer">
        깃허브로 이동
      </a>
      <hr/>
      <p>Reset Button</p>
      <input type="text" value={user} onChange={onUser} placeholder="Name" />
      <button type="reset" onClick={userReset}>Reset</button>
      <hr/>
      <p>Table</p>
      <table border="1" width="20%" height="100" cellSpacing="1">
        <caption>Site</caption>
        <tr align="center" bgcolor="white">
          <td rowSpan="2" border="green">
            Naver
            <a href="http://www.naver.com/">Let's Go</a>
          </td>
          <td bgcolor="yellow">kakao</td>
          <td bgcolor="lightblue">google</td>
        </tr>
        <tr align="center" bgcolor="white">
          <td colSpan="2" bgcolor="pink">HTML</td>
          <td>CSS</td>
          <td>Python</td>
        </tr>
        <tr align="center" bgcolor="white">
          <td>
            <select value={table} onChange={onTable}>
              {siteList.map((item)=>(
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </td>
        </tr>
      </table>
      <hr/>
      <p>ul li</p>
      <ul>
        <b>원하는 사이트가 어디냐?</b>
        <a href="http://www.naver.com" target="_blank">
          <li>
            <b>네이버</b>
          </li>
        </a>
        <li>다음</li>
        <li>구글</li>
      </ul>
      <hr/>
      <p>dbClick</p>
      <input value={click} onChange={onDbClick} />
      <button onDoubleClick={onDbButton}>더블클릭</button>
      <hr/>
      <p>정규식표현</p>
      <form onSubmit={onSubmit}>
        <input type="text" value={userName} onChange={userNameChange} />
        <input type="text" value={inputNumber} onChange={inputNumberChange} />
        <button type="submit">가입</button>
      </form>
      <hr/>
      <p>전화번호부</p>
      <input type="text" value={callBook} onChange={onCallBook} />
      <button onClick={addCallBook}>ADD</button>
      {callList.map((item, index) =>(
        <div key={index}>
          <input value={item} readOnly />
          <button onClick={()=>oncallEdit(index)}>Edit</button>
          <button onClick={()=>oncallDelete(index)}>Delete</button>
        </div>
      ))}
      <hr/>
      <p>{count}</p>
      <input value={count} onChange={onCount} />
      <button onClick = {() => setCount(count+1)}>Click+1</button>
      <button onClick = {() => setCount(count-1)}>Click-1</button>
      <hr/>
      <p>무엇을 원하느가?</p>
      <select value={selBox} onChange={onSelBox}>
        {selboxList.map((item)=>(
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <hr/>
      <p>무엇을 좋아하는냐 ?</p>
      <label>
        <input type="radio" value={laptop} onClick={onLaptop} id="MacBook" name="laptop" /> MacBook
      </label>
      <label>
        <input type="radio" value={laptop} onClick={onLaptop} id="Gram" name="laptop" /> Gram
      </label>
      <label>
        <input type="radio" value={laptop} onClick={onLaptop} id="Samsung" name="laptop" /> Samsung
      </label>



      


    </div>
  );
}

export default App;

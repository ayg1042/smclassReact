import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name = "홍길동";

  const [ename,setEname] = useState('유관순');
  const [a, setA] = useState('');
  // let ename = '';

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const btn = () => {
    alert("함수버튼 클릭")
    name = "이순신";
    // document.getElementById("d01").innerText = name;
    console.log(name);

    // react useState 사용
    setEname('신사임당');

  }

  const loginBtn = () => {
    alert('로그인 버튼')
  }
  const pwBtn = (e) => {
    console.log('pw inputbox에 글을 입력합니다.')
    // enter키가 들어오면 로그인버튼을 클릭하도록 구현
    if(e.keyCode == 13){
      alert('엔터키가 입력되었습니다.');
    }
  }

  return (
    <div className = 'main'>
      <h2>게시판</h2>
      <div id='d01'>{name}</div>
      <div id='d02'>{ename}</div>
      <br/>
      <input type='text' name='id' className='id' onChange={(event)=>setId(event.target.value)} value={id} placeholder='아이디를 입력하세요.'></input>
      <br/>
      <input type='text' name='pw' className='pw' onKeyUp={pwBtn} placeholder='패스워드를 입력하세요.'></input>
      <br/>
      <button onClick={loginBtn}>로그인</button>
      <br/>
      {/* 자바크스립트 : onclick, react:onClick */}
      <button onClick={() => {alert('버튼 클릭')}}>변경</button>
      {/* 한줄인 경우 {}없어도됨*/}
      <button onClick={btn}>함수변경</button>
      {/* 주석 if문 사용할 수 없다. 삼항식 사용해야한다.*/}
      {/*<div>{name == '홍길동' ? (<h3>홍길동입니다.</h3>) : (<h3>홍길동이 아닙니다.</h3>)}</div>*/}
    </div>
  );
}

export default App;

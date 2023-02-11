import './App.css';
import {useState} from 'react';


function App() {
  let ex = '안녕하세요';
  var [a제목,update] = useState(['일기 페이지' ,'b의 일기 페이지' , 'c의 일기 페이지']);
  // var [b제목] = useState('b의 일기 페이지'); 위 코드 어레이 형식으로 / 
  // let [c제목] = useState('c의 일기 페이지');
  // 바뀐 값이 바로 html로 랜더링 되는 useState
  let [like,down] = useState("<-눌러봥");

  function up(){
    console.log(1);
  }
  return (
    
    <div className="App">
      <div className = "read">
{/* 제목 수정 버튼 / state변경 전 화살표가 같기 때문에 값이 바뀌지 않음 / state = array or object라면 copy본 사용 */}
      <div>{a제목[0]}
      <button onClick = {()=>{
        let copy = [...a제목];
        copy[0] = '명환의 일기';
        update(copy);
    }}>update</button> 
  
      <span onClick = {()=>{down('♥')}}>♥</span> {like}
      <p>{ex}</p>
      </div>
      <hr></hr>
      <div>{a제목[1]}</div>
      <p>{ex}</p>
      <hr></hr>
      <div>{a제목[2]}</div>
      <p>{ex}</p>
      <hr></hr>
      </div>
      <Modal/>
    
    
    
    
    </div>
  );
}
// *이름 나이 학부 컴포넌트 생성* 컴포넌트는 state를 가져올 때 오류가 생김 

// const  Modal = () => {} = 오류를 출력해ZOOM

function Modal(){
  return (
    <>
    <div clasName = "modal">
      <h2>이름</h2>
      <p>나이</p>
      <p>학부</p>
    </div>
    </>
  )
}

export default App;

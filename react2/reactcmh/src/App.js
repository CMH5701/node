import './App.css';
import {useState} from 'react';


function App() {
  let ex = '안녕하세요';
  var [a제목] = useState(['일기 페이지' ,'b의 일기 페이지' , 'c의 일기 페이지']);
  // var [b제목] = useState('b의 일기 페이지'); 위 코드 어레이 형식으로
  // let [c제목] = useState('c의 일기 페이지');
  // 바뀐 값이 바로 html로 랜더링 되는 useState
  let [like,down] = useState("눌러봥");

  function up(){
    console.log(1);
  }
  return (
    
    <div className="App">
      <div className = "read">
      <div>{a제목[0]} <span onClick = {()=>{down('♥')}}>♥</span> {like}
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
      
    
    
    
    
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

import Main from "./mains/main";
import Menu from "./mains/menu";
import Counter from "./mains/Counter";
import Textinput from "./mains/textinput";
import Textinput2 from "./mains/textinput2";
import Read from "./mains/read";





import {Routes, Route , Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
    <div className = "menu">
      <Link to = "/">메인</Link>
      <Link to = "/Menu">메뉴</Link>
      <Link to = "/Counter">카운터</Link>
      <Link to = "/Textinput">입력 값</Link>
      <Link to = "/Textinput2">입력 값2</Link>
      <Link to = "/readpage">이름 리스트</Link>
      
      </div>
     

      </nav>
      <Routes> 
        <Route path = "/" element = {<Main/>}/>
        <Route path = "/menu" element = {<Menu/>}/>
        <Route path = "/Counter" element = {<Counter/>}/>
        <Route path = "/textinput" element = {<Textinput/>}/>
        <Route path = "/textinput2" element = {<Textinput2/>}/>
        <Route path = "/read" element = {<read />}/>



      </Routes>

</div>
  );
}

export default App;

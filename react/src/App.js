// import logo from './logo.svg';
// import './App.css';

import Main from "./mains/main";
import Menu from "./mains/menu";
import Counter from "./mains/Counter";
import Textinput from "./mains/textinput";
import Textinput2 from "./mains/textinput2";
import Read from "./mains/read";
import {Routes, Route , Link} from "react-router-dom";
import mainimg from './logo.svg';


function App() {
  return (
    <div className="App">
      <nav>
    <div className = "menu">
      <Link className = "mainnav" to = "/">
      <img className = "mainnavimg" src={mainimg} alt="navtest"/>
      </Link>/
      <Link to = "/Menu">메뉴
      <img className = "mainnavimg" src={mainimg} alt="navtest"/>
      </Link>/
      <Link to = "/Counter">카운터
      <img className = "mainnavimg" src={mainimg} alt="navtest"/>
      </Link>/
      <Link to = "/Textinput">입력 값
      <img className = "mainnavimg" src={mainimg} alt="navtest"/>
      </Link>/
      <Link to = "/Textinput2">입력 값2
      <img className = "mainnavimg" src={mainimg} alt="navtest"/>
      </Link>/
      <Link to = "/read">이름 리스트
      <img className = "mainnavimg" src={mainimg} alt="navtest"/>
      </Link>
      </div>
     

      </nav>
      {/* Link to = url 경로 이름 표시 ex)localhost:1234/main = 메인 */}
      <Routes> 
        <Route path = "/" element = {<Main/>}/>
        <Route path = "/menu" element = {<Menu/>}/>
        <Route path = "/Counter" element = {<Counter/>}/>
        <Route path = "/textinput" element = {<Textinput/>}/>
        <Route path = "/textinput2" element = {<Textinput2/>}/>
        <Route path = "/read" element = {<Read />}/>
      </Routes>

</div>
  );
}

export default App;

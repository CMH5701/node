import React from "react";
import "./css/main.css" ;
import mainimg from './css/testimg.PNG';
function Main() {
    return (
        <div>
        <h2>나의 수강신청</h2>
        <p>수강신청하기</p>
        <div className = "testimg">
            <img className = "img" alt = "testcmh" src = {mainimg} ></img>
            </div>
        </div>
        );
}


export default Main;  //함수형 컴포넌트 요즘 많이 씀


// import React ,{Component} from "react";

// class Main extends Component {
//     render() {
//         return <h2>클래스형 컴포넌트</h2>
//     }
// }
// export default Main;

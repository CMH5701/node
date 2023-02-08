import React, {useState} from "react";

const Textinput2 = () => { //회원가입 폼에 사용 가능 할듯함.
    const [inputs, setInputs] = useState({
    text: "",
    email: "",
    age: "",
    });

    const { text , email , age} = inputs;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        // inputs[id] = value;        
        setInputs({
            ...inputs, //name,email,age 각각의 값이 입력 받아옴
            [id] : value // id에는 name , email , age 
        });
    }

    return(

<div>
            <div>
            <label>이름</label>
            <input type = "text" id = "text" value = {text} onChange = {onChange} > 
            </input>
            </div>
            <div>
            <label>이메일</label>
            <input type = "email"  id = "email"value = {email} onChange = {onChange} >
            </input>
            </div>
            <div>
            <label>나이</label>
            <input type = "age" id = "age" value = {age} onChange = {onChange} >
            </input>
            </div>
            <p>이름: {text}</p>
            <p>이메일: {email}</p>
            <p>나이: {age}</p>

        </div>
    );
};

export default Textinput2;

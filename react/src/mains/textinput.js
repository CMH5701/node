import React, {useState} from "react";

const Textinput = () => {
    const [txtValue , setTextValue] = useState("");

    const onChange = (e) => {
        setTextValue(e.target.value);
    };

    return(
        <div>
            <input type = "text" value = {txtValue} onChange = {onChange} >
            </input>
        <br />
        <p>{txtValue}</p>
        </div>

    );
};

export default Textinput;

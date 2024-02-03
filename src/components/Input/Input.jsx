import './Input.css'
import {useState} from "react";

const Input = () => {
    const [input, setInput] = useState('')
    const onChange = (e) => {
        setInput(e.currentTarget.value)
    }

    return (
        <input  className={'input'} value={input} onChange={onChange}/>
    );
};

export default Input;
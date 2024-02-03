import './Input.css'
import {useState} from "react";

const Input = ({isSearch, placeholder}) => {
    const [input, setInput] = useState('')
    const onChange = (e) => {
        setInput(e.currentTarget.value)
    }

    // span? relative before->(absolute top left) padding-left
    // content url('/icons/search.svg)

    return (
        isSearch ?
        <span className={'wrapper'}>
            <img className={'search'} src={'/icons/search.svg'} alt={'Поиск'}/>
            <input className={'input padding_search'} value={input} onChange={onChange} placeholder={'Введите название'}/>
        </span>
            : < input className={'input'} value={input} onChange={onChange} placeholder={'Ваше имя'}/>
    );
};

export default Input;
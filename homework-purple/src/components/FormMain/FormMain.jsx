import './FormMain.css'
import Button from "../Button/Button.jsx";
import {useState} from "react";

const FormMain = () => {
    const [inputData, setInputData] = useState('')

    const onChange = (e) => {
        setInputData(e.currentTarget.value)
    }

    const addJournalItem=(e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        console.log(formData)
        console.log(formProps)
    }

    return (
        <form className={'form_main'} onSubmit={addJournalItem}>
            <input name={'text'} className={'input'} value={inputData} onChange={onChange}/>
            <Button type={'submit'} text={'Искать'} onClick={() => {
                console.log('Click')
            }}/>
        </form>
    );
};

export default FormMain;
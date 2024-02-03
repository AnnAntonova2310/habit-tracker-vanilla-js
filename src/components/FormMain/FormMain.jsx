import './FormMain.css'
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

const FormMain = () => {

    const addJournalItem=(e)=>{
        e.preventDefault()
        // const formData = new FormData(e.target)
        // const formProps = Object.fromEntries(formData)
        // console.log(formData)
        // console.log(formProps)
    }

    return (
        <form className={'form_main'} onSubmit={addJournalItem}>
            <Input isSearch/>
            <Button type={'submit'} text={'Искать'} onClick={() => {
                console.log('Click')
            }}/>
        </form>
    );
};

export default FormMain;
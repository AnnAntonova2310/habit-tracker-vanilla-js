import './ButtonExit.css'

const ButtonExit = ({onClick, text}) => {
    return (
        <div className={'btn'} onClick={() => {
            console.log('clickExit')
        }}>
            {text}
            <img className={'button_exit'} src={'/icons/button_exit.svg'} alt={'Кнопка'}/>
        </div>
    );
};

export default ButtonExit;
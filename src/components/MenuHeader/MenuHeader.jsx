import './MenuHeader.css'
import NavItem from "../NavItem/NavItem.jsx";
import ButtonExit from "../ButtonExit/ButtonExit.jsx";


const MenuHeader = () => {
    return (
        <div className={'menu_header'}>
            <NavItem text={'Поиск фильмов'} isActive/>
            <NavItem text={'Мои фильмы'} isActive={false}/>
            {/* isActive не нужен всегда*/}
            <ButtonExit text={'Войти'}/>
        </div>
    );
};

export default MenuHeader;
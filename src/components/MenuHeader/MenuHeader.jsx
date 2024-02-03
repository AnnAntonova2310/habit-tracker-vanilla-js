import './MenuHeader.css'
import NavItem from "../NavItem/NavItem.jsx";
import ButtonExit from "../ButtonExit/ButtonExit.jsx";


const MenuHeader = ({isLogin}) => {
    return (
        isLogin ?
            <div className={'menu_header'}>
                <NavItem text={'Поиск фильмов'} isActive/>
                <NavItem text={'Мои фильмы'}/>
                <NavItem text={'Анна'} isLogin/>
                <ButtonExit text={'Войти'}/>
            </div>
        :
        <div className={'menu_header'}>
            <NavItem text={'Поиск фильмов'} isActive/>
            <ButtonExit text={'Войти'}/>
        </div>

    );
};

export default MenuHeader;
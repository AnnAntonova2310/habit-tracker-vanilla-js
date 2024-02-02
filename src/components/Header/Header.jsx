import './Header.css'
import MenuHeader from "../MenuHeader/MenuHeader.jsx";

const Header = () => {
    return (
        <div className={'header'}>
            <img className={'logo'} src={'/icons/logo.svg'} alt={'Логотип'}/>
            <MenuHeader/>
        </div>
    );
};

export default Header;
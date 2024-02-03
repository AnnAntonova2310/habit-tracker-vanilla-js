import './NavItem.css'

const NavItem = ({text, isActive, isLogin}) => {
    return (
        isLogin ?
            <div className={'wrapper'}>
                <a className={`link ${isActive ? 'active' : ''}`}>{text}</a>
                <img className={'login'} src={'/icons/login.svg'} alt={'Логин'}/>
            </div>
            : <a className={`link ${isActive ? 'active' : ''}`}>{text}</a>
    );
};

export default NavItem;
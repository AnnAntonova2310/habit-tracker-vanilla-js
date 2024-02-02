import './NavItem.css'

const NavItem = ({text, isActive}) => {
    return (
        <a className={`link ${isActive ? 'active' : ''}`}>{text}</a>
    );
};

export default NavItem;
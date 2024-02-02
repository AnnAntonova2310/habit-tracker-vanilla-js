import './Paragraph.css'

const Paragraph = ({children, isSmall}) => {
    return (
        // <p className={isSmall ? 'paragraph' : ''}>{children}</p>
        <p className={`paragraph ${isSmall ? 'small' : ''}`}>{children}</p>
    );
};

export default Paragraph;
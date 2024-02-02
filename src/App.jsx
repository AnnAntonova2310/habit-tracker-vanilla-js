import './App.css'
import Title from "./components/Title/Title.jsx";
import Paragraph from "./components/Paragraph/Paragraph.jsx";
import Header from "./components/Header/Header.jsx";
import FormMain from "./components/FormMain/FormMain.jsx";
import MenuHeader from "./components/MenuHeader/MenuHeader.jsx";

function App() {
    const data = [
        {
            title: 'Поиск',
            paragraph: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.',
            button: 'Искать',
        },
        {
            title: 'Вход',
            // paragraph: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.',
            button: 'Войти в профиль'
        }
    ]
    return (
        <>
            <Header/>
            <Title>{data[0].title}</Title>
            {/*<Paragraph isSmall>{data[0].paragraph}</Paragraph>*/}
            <Paragraph>{data[0].paragraph}</Paragraph>
            <FormMain/>
        </>
    )
}

export default App

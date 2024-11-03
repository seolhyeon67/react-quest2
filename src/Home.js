import './App.css';
import Header from './route/Header1.js';
import Mp from './Main_picture.js';
import IconT from './Icon_title.js';
import Iconbox from './Iconbox.js';
import Chefs from './Chefs.js';

function Home () {
    return (
        <>
            <Header/>
            <Mp/>
            <IconT/>
            <Iconbox/>
            <Chefs/>
        </>
    )
}

export default Home;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './route/Header1.js';
import Mp from './Main_picture.js';
import IconT from './Icon_title.js';
import Iconbox from './Iconbox.js';
import Chefs from './Chefs.js';
import About from './route/Fabout.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/About" element={<About />}/>
        </Routes>
      </BrowserRouter>
      <Header/>
      <Mp/>
      <IconT/>
      <Iconbox/>
      <Chefs/>
    </>
  );
}

export default App;

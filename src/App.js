import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './route/Fabout.js';
import Home from './Home.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/About" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import NavbarApi from './layouts/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Episodios from './components/Episodios'
import Personajes from './components/Personajes';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarApi />
        <Container>
          <Routes>
              <Route path='/' element={<Episodios />} />
              <Route path='/personajes' element={<Personajes />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;

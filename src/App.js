import Nav from './components/Nav';
import About from './components/pages/About';
import Coding from './components/pages/Coding';
import Art from './components/pages/Art';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className='app'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='coding' element={<Coding />} />
          <Route path='art' element={<Art />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;

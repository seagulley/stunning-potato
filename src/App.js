import Navbar from './components/Navbar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './components/pages/About.js';
import { Coding } from './components/pages/Coding.js';
import { Art } from './components/pages/Art.js';
import { Contact } from './components/pages/Contact.js';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" component={About} />
        <Route path="coding" component={Coding} />
        <Route path="art" component={Art} />
        <Route path="contact" component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

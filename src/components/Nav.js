import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <nav>
          <h1>Kallie Huynh</h1>
          <ul className="nav-menu">
              <Link to='/'>
              <li className="nav-links">About</li>
              </Link>
              <Link to='coding'>
                <li className="nav-links">Coding</li>
              </Link>
              <Link to='art'>
                <li className="nav-links">Art</li>
              </Link>
              <Link to='contact'>
                <li className="nav-links">Contact</li>
              </Link>
          </ul>
      </nav>
    );
  }
  
  export default Nav;
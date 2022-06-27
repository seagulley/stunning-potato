import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div>
                    Kallie Huynh
                </div>
                <ul className={'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            About   
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='coding' className='nav-links'>
                            Coding   
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='art' className='nav-links'>
                            Art   
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='contact' className='nav-links'>
                            Contact   
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  );
}

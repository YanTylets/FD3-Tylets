import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css'
import Login from './Login';

class Header extends React.PureComponent {

    render() {
        return(
            <header>
              <div className='logo'>
                <NavLink to={"/"} className="main-page-link" title="Go Home"><svg></svg></NavLink>
                <h2>Название</h2>
              </div>
              <Login/>
            </header>

        );
    }
}

export default Header;
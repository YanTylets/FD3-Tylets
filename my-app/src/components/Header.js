import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './Header.css'

class Header extends React.PureComponent {

  
  static propTypes = {
    favorites: PropTypes.object.isRequired,
}

    render() {
        return(
            <header>
              <div className='logo'>
                <NavLink to={"/FD3-Tylets"} className="main-page-link" title="Go Home"><svg></svg></NavLink>
                <h2>MoviesDB</h2>
              </div>
              <NavLink to={"/FD3-Tylets/favlist"} className={(this.props.favorites.data.length >0)? 'favorite-list-link-active' : 'favorite-list-link'}>Избранное({this.props.favorites.data.length})</NavLink>
            </header>

        );
    }
}
const mapStateToProps = function (state) {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps)(Header);

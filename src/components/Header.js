import React from 'react';
import { Link } from 'react-router';

const Header = () => {
	return (
		<div className="row">
			<nav>
        <div className="nav-wrapper">
          <Link to={'/'} className="brand-logo">Games</Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><Link to={'/about'}>About</Link></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to={'/about'}>About</Link></li>
          </ul>
        </div>
      </nav>
		</div>
	);
};

export default Header;

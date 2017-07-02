import React from 'react';
import { Link } from 'react-router';

const Header = () => {
	return (
		<div className="row">
			<nav>
        <div className="nav-wrapper light-green lighten-1">
          <Link to={'/'} className="brand-logo center">Book Store</Link>
        </div>
      </nav>
		</div>
	);
};

export default Header;

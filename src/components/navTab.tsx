import { Link } from 'react-router-dom';
import React from 'react';

const NavTab: React.FC = () => {

    return (
        <div className='header'>
          <nav>
            <Link to="/">SmartPocketCharger</Link>
            <ul>
                <Link to="/story"><li>Our Story</li></Link>
                <Link to="/shop"><li>Shop</li></Link>
                <Link to="/shop"><li>🛒</li></Link>
            </ul>
          </nav>
        </div>
    )
  }

export default NavTab;
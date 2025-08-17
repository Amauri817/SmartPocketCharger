import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from "react";

const NavTab: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    return (
        <div className='header'>
          <nav>
            <div className='center' ref={dropdownRef}>
              <h1 className="center-button" onClick={() => setDropdownOpen(prev => !prev)}>BluPrint</h1> {dropdownOpen && (<div className="dropdown-menu">
            <ul>
                <Link to="/story"><li>Our Story</li></Link>
            </ul>
          </div>
        )}
          </div>
          <div>
            <ul>
              <li><Link to="/"><li>🏠</li></Link></li>
            </ul>
          </div>
          <ul>
                
                <Link to="/shop"><li>Shop</li></Link>
                <Link to="/shop"><li>🛒</li></Link>
          </ul>
          </nav>
        </div>
    )
  }

export default NavTab;
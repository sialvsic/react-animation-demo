import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <Link
        to={ {
          pathname: '/page1',
          state: { fromPage: true },
        } }
        className="nav__link"
      >
        Page1
      </Link>
      <Link
        to={ {
          pathname: '/page2',
          state: { fromPage: true },
        } }
        className="nav__link"
      >
        Page2
      </Link>
      <Link
        to={ {
          pathname: '/page3',
          state: { fromPage: true },
        } }
        className="nav__link"
      >
        Page3
      </Link>
    </nav>
  );
}

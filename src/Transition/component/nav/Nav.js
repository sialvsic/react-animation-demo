import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <Link
        to={ {
          pathname: '/',
          state: { back: true },
        } }
        className="nav__link"
      >
        Home
      </Link>
      <Link
        to={ {
          pathname: '/about',
          state: { back: true },
        } }
        className="nav__link"
      >
        About
      </Link>
      <Link
        to={ {
          pathname: '/name',
          state: { back: true },
        } }
        className="nav__link"
      >
        Name
      </Link>
    </nav>
  );
}

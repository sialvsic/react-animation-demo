import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <Link
        to={ {
          pathname: '/',
        } }
        className="nav__link"
      >
        Home
      </Link>
      <Link
        to={ {
          pathname: '/about',
        } }
        className="nav__link"
      >
        About
      </Link>
      <Link
        to={ {
          pathname: '/name',
        } }
        className="nav__link"
      >
        Name
      </Link>
    </nav>
  );
}

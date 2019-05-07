import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return <div>
    <p>this is home page</p>

    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/basic/">Basic</Link>
        </li>
      </ul>
    </nav>
  </div>;
};

export default Home;

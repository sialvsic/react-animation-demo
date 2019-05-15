import React from 'react';
import { withRouter } from 'react-router-dom';
// import './Page.css';
import './Page-keyframes.css';

function Page({ children }) {

  return (
    <section className='page'>
      { children }
    </section>
  );
}

export default withRouter(Page);

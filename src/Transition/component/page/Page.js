import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import './Page.css';
// import './Page-keyframes.css';

function Page({
  children,
  color,
  background,
  location: {
    state,
  },
}) {

  const cx = classNames({
    page: true,
  });

  return (
    <section
      className={ cx }
      style={ {
        color,
        background,
      } }
    >
      { children }
    </section>
  );
}

export default withRouter(Page);

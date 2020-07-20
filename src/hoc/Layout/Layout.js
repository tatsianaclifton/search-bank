import React from 'react';

import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <React.Fragment>
      <NavigationItems/>
      <main className={classes.Content}>
        {props.children}
      </main>
    </React.Fragment>
  )
};

export default Layout;
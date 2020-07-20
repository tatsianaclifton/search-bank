import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import BankFind from './components/BankFind/BankFind';
import BankDetail from './components/BankDetail/BankDetail';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact component={BankFind} />
          <Route path='/bank/:id' component={BankDetail} />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

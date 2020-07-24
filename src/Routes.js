import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
// import Pages from './Pages';

const Routes = () => (
  <Switch>
    <Route path="/favorites" component={Favorites} />
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;

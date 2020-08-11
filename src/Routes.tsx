import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/favorites" component={Favorites} />
        <Route exact path="/" component={Home} />
    </Switch>
);

export default Routes;

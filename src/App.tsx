import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Kaizens from './components/Kaizens';

import './App.css';

const App = () => (
//  const App: React.FC<{}> = () => (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/kaizens/:code" component={Kaizens} />
          <Route path="/" component={Home} />
          <Redirect to="/" />;
        </Switch>
      </Router>
  </div>
);

export default App;

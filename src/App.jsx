import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import List from './components/List';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={List} />
      </Switch>
    </Router>
  );
};
export default App;

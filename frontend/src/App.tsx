import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserManagement from './components/UserManagement';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/users" component={UserManagement} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
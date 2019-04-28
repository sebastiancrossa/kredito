import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Component imports
import PersonaFisica from './pages/PersonaFisica';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/persona/fisica/form' component={PersonaFisica} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();

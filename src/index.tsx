import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home } from './pages/Home';
import { CadastroVideo } from './pages/CadastroVideo';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/test" component={() => <div>Test!</div>} />
      <Route path="/cadastro-video" component={CadastroVideo} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>

  , document.getElementById('root')
);


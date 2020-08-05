import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CadastroVideo } from './pages/Cadastro/Video';
import { Home } from './pages/Home';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import { CadastroCategoria } from './pages/Cadastro/Categoria';
import { Pagina404 } from './pages/Pagina404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/test" component={() => <div>Test!</div>} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" exact component={Home} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>

  , document.getElementById('root')
);

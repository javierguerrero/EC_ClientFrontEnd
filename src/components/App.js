import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.css';

import Layout from "./Layout";
import Home from '../pages/Home';
import Conversations from '../pages/Conversations';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Contact from '../pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/conversations" component={Conversations} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
          </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

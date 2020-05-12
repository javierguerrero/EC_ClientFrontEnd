import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from "./Layout";
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import CourseDetails from '../pages/CourseDetails';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Contact from '../pages/Contact';

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/courses/:courseId" component={CourseDetails} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
          </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

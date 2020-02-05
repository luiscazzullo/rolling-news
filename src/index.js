import React from 'react';
import { render } from 'react-dom'; // ReactDOM.render

import { BrowserRouter as Router, Route } from 'react-router-dom';
// Views
import Home from './views/home/Home';
import Detail from './views/detail/Detail';
import Login from './views/login/Login';
import Articles from './views/articles/Articles';
import Playground from './views/playground/Playground';
import Footer from './components/footer/Footer';
import Article from './views/article/Article';

// Styles
import './main.css';
import Header from './components/header/Header';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/article" exact>
          <Article />
        </Route>
        <Route path="/article/:id" exact>
          <Article />
        </Route>
        <Route path="/playground">
          <Playground />
        </Route>
        <Route path="/actualidad">
          <Home />
        </Route>
        <Route path="/policiales">
          <Home />
        </Route>
        <Route path="/deportes">
          <Home />
        </Route>
      </Router>
      <Footer />
    </>
  );
};

render(<App />, document.getElementById('app'));
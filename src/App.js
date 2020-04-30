import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop'
import Header from './components/header'

import SignInSignUpPage from './pages/signIn-and-SignUp';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-in' component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
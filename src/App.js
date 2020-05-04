import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/utils.js';

import './App.css';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop'
import Header from './components/header'
import SignInSignUpPage from './pages/signIn-and-SignUp';

const App = () => {
  const [currentUser, setUser] = useState(null)

  useEffect(() => {
    const getUserState = user => {
      setUser(user.currentUser)
      console.log(user)
    }
    auth.onAuthStateChanged(getUserState)
  })
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
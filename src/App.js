import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/utils.js';

import './App.css';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop'
import Header from './components/header'
import SignInSignUpPage from './pages/signIn-and-SignUp';

const App = () => {
  const [currentUser, setUser] = useState(null)

  useEffect(() => {
    const getUserState = async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          const newUser = {
            id: snapShot.id,
            ...snapShot.data()
          }
          setUser(newUser)
          console.log(newUser)
        })
      } else {
        setUser(userAuth)
      }

    }
    const unsubscribeFromAuth = auth.onAuthStateChanged(getUserState)
    return () => unsubscribeFromAuth

  }, [])
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-in' component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
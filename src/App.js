import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage';
import ShopPage from './pages/shop'
import Header from './components/header'
import SignInSignUpPage from './pages/signIn-and-SignUp';
import { auth, createUserProfileDocument } from './firebase/utils.js';
import { setCurrentUser } from './redux/user/actions';

const App = (props) => {

  useEffect(() => {
    const { setCurrentUser } = props
    const getUserState = async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        })
      } else {
        setCurrentUser(userAuth);
      }
    }
    const unsubscribeFromAuth = auth.onAuthStateChanged(getUserState)
    return () => unsubscribeFromAuth

  }, [])
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
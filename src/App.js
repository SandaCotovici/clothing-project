import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
        <Route exact path='/sign-in' render={() => props.currentUser ? (<Redirect to='/' />) : (<SignInSignUpPage />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
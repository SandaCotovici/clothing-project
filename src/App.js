import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css'

import HomePage from './pages/homepage'
import ShopPage from './pages/shop'
import Header from './components/header'
import CheckoutPage from './pages/checkout'
import SignInSignUpPage from './pages/signIn-and-SignUp'
import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments,
} from './firebase/utils.js'
import { setCurrentUser } from './redux/user/actions'
import { selectCurrentUser } from './redux/user/selectors'
import { selectCollectionsForPreview } from './redux/shop/selectors'

const App = (props) => {
  useEffect(() => {
    // const { setCurrentUser, collectionArray } = props
    const { setCurrentUser } = props
    const getUserState = async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
        // code used to add data to firestore:
        // addCollectionAndDocuments(
        //   'collections',
        //   collectionArray.map(({ title, items }) => ({ title, items }))
        // )
      } else {
        setCurrentUser(userAuth)
      }
    }
    const unsubscribeFromAuth = auth.onAuthStateChanged(getUserState)
    return () => unsubscribeFromAuth
  }, [])
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/sign-in"
          render={() =>
            props.currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionArray: selectCollectionsForPreview,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

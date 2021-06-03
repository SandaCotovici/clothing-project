import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/homepage'
import ShopPage from './pages/shop'
import Header from './components/header'
import CheckoutPage from './pages/checkout'
import SignInSignUpPage from './pages/signIn-and-SignUp'

import { GlobalStyle } from './global.styles'

import { selectCurrentUser } from './redux/user/selectors'
import { selectCollectionsForPreview } from './redux/shop/selectors'
import { checkUserSession } from './redux/user/actions'

const App = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])
  return (
    <div>
      <GlobalStyle />
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

export default connect(mapStateToProps, null)(App)

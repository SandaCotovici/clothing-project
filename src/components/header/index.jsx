import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/utils'
import CartIcon from '../cart-icon'
import CartDropdown from '../cart-dropdown'
import { selectCartHidden } from '../../redux/cart/selectors'
import { selectCurrentUser } from '../../redux/user/selectors'

import { ReactComponent as Logo } from '../../assets/original.svg'
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './styles'
import { signOutStart } from '../../redux/user/actions'

const Header = ({ currentUser, hidden }) => {
  const dispatch = useDispatch()

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/sign-in">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)

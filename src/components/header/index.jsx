import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/utils'
import CartIcon from '../cart-icon'
import CartDropdown from '../cart-dropdown'
import { selectCartHidden } from '../../redux/cart/selectors'
import { selectCurrentUser } from '../../redux/user/selectors'

import { ReactComponent as Logo } from '../../assets/original.svg'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './styles'

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to="/sign-in">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)

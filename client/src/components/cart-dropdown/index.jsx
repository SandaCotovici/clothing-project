import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart/selectors'
import CartItem from '../cart-item/index'
import { toggleCartHidden } from '../../redux/cart/actions'

import {
  CartDropdownContainer,
  CartItemsContainer,
  CartDropdownButton,
  CartDropdownEmptyMessage,
} from './styles'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <CartDropdownEmptyMessage>Your cart is empty</CartDropdownEmptyMessage>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
    >
      Go to CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))

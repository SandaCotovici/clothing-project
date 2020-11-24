import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

import { selectCartItemsQuantity } from '../../redux/cart/selectors'
import { toggleCartHidden } from '../../redux/cart/actions'
import { CartIconContainer, ItemCountContainer, ShoppingIcon } from './styles'

const CartIcon = ({ toggleCartHidden }) => {
  // use Selector with hook
  const itemQuantity = useSelector(selectCartItemsQuantity)

  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCountContainer>{itemQuantity}</ItemCountContainer>
    </CartIconContainer>
  )
}

// Another way of using selectors
// const mapStateToProps = (state) => ({
//   itemQuantity: selectCartItemsQuantity(state),
// })

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(null, mapDispatchToProps)(CartIcon)

import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

import { selectCartItemsQuantity } from '../../redux/cart/selectors'
import { toggleCartHidden } from '../../redux/cart/actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './styles.scss'

const CartIcon = ({ toggleCartHidden }) => {
  // use Selector with hook
  const itemQuantity = useSelector(selectCartItemsQuantity)

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemQuantity}</span>
    </div>
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

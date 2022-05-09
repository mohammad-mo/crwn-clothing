import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { selectCartItems } from '../../store/cart/cart.selector'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)

  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-yey'>
      <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {React.Children.toArray(
            cartItems.map((item) => <CartItem cartItem={item} />),
          )}
        </div>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </div>
    </div>
  )
}

export default CartDropdown

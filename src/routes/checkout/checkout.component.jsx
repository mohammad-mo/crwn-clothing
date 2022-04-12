import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './checkout.styles.scss'

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext)

  return (
    <div>
      <div>
        {React.Children.toArray(
          cartItems.map((cartItem) => {
            const { name, quantity } = cartItem
            return (
              <div>
                <h2>{name}</h2>
                <span>{quantity}</span>
                <br />
                <span onClick={() => removeItemToCart(cartItem)}>
                  decrement
                </span>
                <br />
                <span onClick={() => addItemToCart(cartItem)}>increment</span>
              </div>
            )
          }),
        )}
      </div>
    </div>
  )
}

export default Checkout

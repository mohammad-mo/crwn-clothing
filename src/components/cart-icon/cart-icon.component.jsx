import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.scss'

import { ReactComponent as ShoppingIcon } from '../../assets/124 shopping-bag.svg'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>10</span>
    </div>
  )
}

export default CartIcon

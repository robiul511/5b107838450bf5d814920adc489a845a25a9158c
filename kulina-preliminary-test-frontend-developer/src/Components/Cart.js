import React from 'react'
import { useSelector } from 'react-redux'
import '../Css/Cart.css'

function Cart() {
  const cart = useSelector(state => state.cart)
  const totalPrice = useSelector(state => state.totalPrice)
  
  if(cart.length === 0) {
    return null
  }
  return (
    <div className='Cart'>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h4>{cart.length} Items | Rp. {totalPrice}</h4>
        <p>Sudah termasuk ongkos kirim</p>
      </div>
      <div style={{display: 'flex', flexDirection: 'center'}}>
        <span class="material-icons">shopping_cart</span>
        <span class="material-icons">navigate_next</span>
      </div>
    </div>
  )
}

export default Cart

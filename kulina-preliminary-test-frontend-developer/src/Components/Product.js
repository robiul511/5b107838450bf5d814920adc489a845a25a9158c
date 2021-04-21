import React from 'react'
import { useDispatch } from 'react-redux'
import { addCart, addTotalPrice } from '../Store/Actions'

function Product(props) {
  const {data} = props
  const dispatch = useDispatch()
  function addToCart() {
    dispatch(addCart(data))
    dispatch(addTotalPrice(data.price))
  }
  
  return (
    <div style={{margin: 10}}>
      <img style={{width: '350px', height: '300px'}} src={data.imgUrl} alt={data.product} />
      <p>Rating: {data.rating}</p>
      <h4>{data.product}</h4>
      <p>by: {data.storeName}</p>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h3>Rp. {data.price}</h3>
        <button className='btn btn-danger' onClick={addToCart}>add +</button>
      </div>
    </div>
  )
}

export default Product

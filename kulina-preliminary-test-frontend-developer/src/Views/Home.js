import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Product from '../Components/Product'
import { filteredProducts } from '../Store/Actions'

function Home() {
  const date = useSelector(state => state.date)
  const menu = useSelector(state => state.menu)
  const products = useSelector(state => state.products)
  const loading = useSelector(state => state.loading)
  const selctedProducts = useSelector(state => state.selctedProducts)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filteredProducts({date, menu, allProducts: products}))
  }, [dispatch, date, menu])

  function goToLocationPage () {
    history.push('/location')
  }
  
  if(loading) {
    return (
      <div>
        <h1>loading....</h1>
      </div>
    )
    
  }
  return (
    <div style={{marginTop: 200, marginBottom: 100}}>
      <h4>{date}</h4>
      {
        selctedProducts.map((selctedProduct, index) => (
          <Product data={selctedProduct} key={index}/>
        ))
      }
    </div>
  )
}

export default Home

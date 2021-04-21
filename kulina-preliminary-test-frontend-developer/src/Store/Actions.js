
export function setProduct (payload) {
  return {type: 'PRODUCTS/SETPRODUCTS', payload}
}

export function addProduct (payload) {
  return {type: 'PRODUCTS/ADDPRODUCT', payload}
}

export function setSelectedProducts (payload) {
  return {type: 'SELECTEDPRODUCTS/SETSELECTEDPRODUCTS', payload}
}

export function setLoading (payload) {
  return {type: 'LOADING/SETLOADING', payload}
}

export function setMenu (payload) {
  return {type: 'MENU/SETMENU', payload}
}

export function setDate (payload) {
  return {type: 'DATE/SETDATE', payload}
}

export function addCart (payload) {
  return {type: 'CART/ADDCART', payload}
}

export function addTotalPrice (payload) {
  return {type: 'TOTALPRICE/ADDTOTALPRICE', payload}
}

export function setLocation (payload) {
  return {type: 'LOCATION/SETLOCATION', payload}
}

//this function to set SelectedProduct(filtered by date and menu)
export function filteredProducts (payload) {
  return (dispatch) => {
    dispatch(setLoading(true))
    const { date, menu, allProducts } = payload
    const filteredProducts = allProducts.filter(product => product.menu === menu && product.date === date)
    dispatch(setSelectedProducts(filteredProducts))
    dispatch(setLoading(false))
  }
}


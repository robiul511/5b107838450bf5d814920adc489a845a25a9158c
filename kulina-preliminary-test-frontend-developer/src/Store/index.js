import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

const initialState = {
  products: [
    {
      product: 'nasi bebek',
      storeName: 'warung ibu nur',
      imgUrl: 'https://kln.imgix.net/production/F2M2UTMV78-6.%20Nasi%20Bebek%20Khas%20Madura%20Ibu%20Nur.jpg?w=300',
      rating: 4,
      price: 50000,
      date: 'selasa 20-april-2021',
      menu: 'lunch' 
    },
    {
      product: 'syomay',
      storeName: 'warung ibu nur',
      imgUrl: 'https://kln.imgix.net/production/TEFU8HKT2V-scaled_image_picker6775439312748702737.jpg?w=300',
      rating: 4,
      price: 50000,
      date: 'rabu 21-april-2021',
      menu: 'lunch' 
    },
    {
      product: 'martabak telor',
      storeName: 'warung ibu nur',
      imgUrl: 'https://kln.imgix.net/production/TEFU8HKT2V-scaled_image_picker6775439312748702737.jpg?w=300',
      rating: 4,
      price: 50000,
      date: 'rabu 21-april-2021',
      menu: 'dinner' 
    },
    {
      product: 'martabak alfin',
      storeName: 'sweet alvin',
      imgUrl: 'https://kln.imgix.net/production/LRALARKLZR-IMG-20201130-WA0019.jpg?w=300',
      rating: 4,
      price: 50000,
      date: 'rabu 21-april-2021',
      menu: 'dinner' 
    },
    {
      product: 'sepageti',
      storeName: 'spageti abang yayat',
      imgUrl: 'https://kln.imgix.net/production/4LNCSQMKUR-scaled_image_picker7943129807632480705.jpg?w=700',
      rating: 4,
      price: 50000,
      date: 'rabu 21-april-2021',
      menu: 'lunch' 
    }
  ],
  selctedProducts: [], //AFTER FILTERD BY DATE AND MENU
  loading: false,
  date: 'rabu 21-april-2021',
  menu: 'lunch',
  cart: [],
  totalPrice: 0,
  location: '',
  sugestionLocations: [
    {
      name: 'kalina',
      address: 'Jl. Tulodong atas 28, Senayan'
    },
    {
      name:  'warung bebek sinjay',
      address: 'Jl. Raya Ketengan Bangkalan'
    },
    {
      name: 'warung bebek seroja',
      address: 'Jl. Tangkel Suramadu Bangkalan'
    },
    {
      name: 'bakso cak no',
      address: 'Jl. Belakang Kecamatan Burneh Bangkalan'
    },
    {
      name: 'bakso nje',
      address: 'J;. Raya Embong Mereng Burneh'
    }
  ]
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'PRODUCTS/SETPRODUCTS':
      return {...state, products: action.payload}
    case 'PRODUCTS/ADDPRODUCT':
      return {...state, products: [...state.products, action.payload]}
    case 'SELECTEDPRODUCTS/SETSELECTEDPRODUCTS':
      return {...state, selctedProducts: action.payload}
    case 'LOADING/SETLOADING':
      return {...state, loading: action.payload}
    case 'DATE/SETDATE':
      return {...state, date: action.payload}
    case 'MENU/SETMENU':
      return {...state, menu: action.payload}
    case 'CART/ADDCART':
      return {...state, cart: [...state.cart, action.payload]}
    case 'TOTALPRICE/ADDTOTALPRICE':
      return {...state, totalPrice: state.totalPrice + action.payload}
    case 'LOCATION/SETLOCATION':
      return {...state, location: action.payload}
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

const initialState = {
  products: [
    {
      product: 'Soto lamongan',
      storeName: 'Warung soto makmur',
      imgUrl: 'https://asset.kompas.com/crops/uKBF7EnR2gcF4btwn_Iwlw9TZd4=/0x0:1000x667/750x500/data/photo/2020/07/20/5f15325e9dc87.jpg',
      rating: 4,
      price: 21000,
      date: 'senin 19-april-2021',
      menu: 'lunch' 
    },
    {
      product: 'Soto Madura',
      storeName: 'Warung Kuliner Madura',
      imgUrl: 'https://img-global.cpcdn.com/recipes/8acb4a9132c1b325/1200x630cq70/photo.jpg',
      rating: 4,
      price: 50000,
      date: 'senin 19-april-2021',
      menu: 'lunch' 
    },
    {
      product: 'Rawon Surabaya',
      storeName: 'warung ibu nur',
      imgUrl: 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2019/07/18/1838279198.jpg',
      rating: 4,
      price: 30000,
      date: 'senin 19-april-2021',
      menu: 'dinner' 
    },
    {
      product: 'Rawon',
      storeName: 'Waarung Mbak Tin',
      imgUrl: 'https://www.unileverfoodsolutions.co.id/dam/global-ufs/mcos/SEA/calcmenu/recipes/ID-recipes/rice-dishes/nasi-rawon/main-header.jpg',
      rating: 4,
      price: 50000,
      date: 'senin 19-april-2021',
      menu: 'dinner' 
    },
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
      product: 'Bakso',
      storeName: 'Warung Bakso Kepala Sapi',
      imgUrl: 'https://asset.kompas.com/crops/NWLD3RCHdItdaGnd71jO5vZkYJc=/0x129:1000x796/750x500/data/photo/2020/03/03/5e5e292daa840.jpg',
      rating: 4,
      price: 150000,
      date: 'selasa 20-april-2021',
      menu: 'lunch' 
    },
    {
      product: 'Bakso Mercon',
      storeName: 'Warung Bakso Goyang Lidah',
      imgUrl: 'https://awsimages.detik.net.id/community/media/visual/2021/02/03/bakso-jeletot-kuah-pedas.png?w=700&q=90',
      rating: 4,
      price: 180000,
      date: 'selasa 20-april-2021',
      menu: 'dinner' 
    },
    {
      product: 'Bakso Jumbo',
      storeName: 'Warung Bakso Kepala Sapai',
      imgUrl: 'https://asset.kompas.com/crops/rKNYi_v6QDBdOa3WbwdklBIQEbY=/0x0:698x465/780x390/data/photo/2021/01/08/5ff86f55cf2e4.jpg',
      rating: 4,
      price: 200000,
      date: 'selasa 20-april-2021',
      menu: 'dinner' 
    },
    {
      product: 'syomay',
      storeName: 'syomas mas aji',
      imgUrl: 'https://kln.imgix.net/production/TEFU8HKT2V-scaled_image_picker6775439312748702737.jpg?w=300',
      rating: 4,
      price: 20000,
      date: 'rabu 21-april-2021',
      menu: 'lunch' 
    },
    {
      product: 'martabak telor',
      storeName: 'warung sanggan',
      imgUrl: 'https://img-global.cpcdn.com/recipes/97615476324cfbdc/751x532cq70/martabak-telur-foto-resep-utama.jpg',
      rating: 4,
      price: 450000,
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
    },
    {
      product: 'Nasi Pecel',
      storeName: 'Warung Jogja',
      imgUrl: 'https://img-global.cpcdn.com/recipes/308584bd0eb8e07f/1200x630cq70/photo.jpg',
      rating: 4,
      price: 30000,
      date: 'kamis 22-april-2021',
      menu: 'lunch' 
    },
    {
      product: 'Gudeg jogja',
      storeName: 'Warung Jogja',
      imgUrl: 'https://awsimages.detik.net.id/community/media/visual/2018/05/07/8bd605fc-08c3-4c8c-b294-a744e1553020.jpeg?w=700&q=90',
      rating: 4,
      price: 40000,
      date: 'kamis 22-april-2021',
      menu: 'lunch' 
    },
    {
      product: 'Wedang Angsle',
      storeName: 'Nikmat Caffe',
      imgUrl: 'https://img-global.cpcdn.com/recipes/8a8272e84776384e/680x482cq70/wedang-angsle-foto-resep-utama.jpg',
      price: 15000,
      date: 'kamis 22-april-2021',
      menu: 'dinner' 
    },
    {
      product: 'Wedang Susu Jahe',
      storeName: 'Nikmat Caffe',
      imgUrl: 'https://www.resepmasakterbaru.com/wp-content/uploads/2020/09/resep-wedang-susu-jahe-hangat.jpg',
      rating: 4,
      price: 10000,
      date: 'kamis 22-april-2021',
      menu: 'dinner' 
    },
    {
      product: 'Kerak Telor',
      storeName: 'Warung Pak Samidi',
      imgUrl: 'http://kbu-cdn.com/dk/wp-content/uploads/kerak-telor.jpg',
      rating: 4,
      price: 10000,
      date: 'jumat 23-april-2021',
      menu: 'lunch' 
    },
    {
      product: 'Rujak Cingur',
      storeName: 'RUjak Mbak Su',
      imgUrl: 'https://cdn.sindonews.net/dyn/620/content/2018/10/11/185/1345275/menu-siang-ini-rujak-cingur-khas-jawa-timur-sKB-thumb.jpg',
      rating: 4,
      price: 10000,
      date: 'jumat 23-april-2021',
      menu: 'lunch' 
    },
    {
      product: 'Sate Taichan',
      storeName: 'Lesehan Sidol',
      imgUrl: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1535016443/xgduas6rmi0tprvglguw.jpg',
      rating: 4,
      price: 10000,
      date: 'jumat 23-april-2021',
      menu: 'dinner' 
    },
    {
      product: 'Cilok Lumer',
      storeName: 'Cilok Gang 3',
      imgUrl: 'https://nusadaily.com/wp-content/uploads/2020/12/1312-cilok-mercon.jpg',
      rating: 4,
      price: 10000,
      date: 'jumat 23-april-2021',
      menu: 'dinner' 
    },
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
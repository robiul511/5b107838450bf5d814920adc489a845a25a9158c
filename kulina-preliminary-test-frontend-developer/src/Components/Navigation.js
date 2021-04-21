import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { filteredProducts, setDate, setMenu } from '../Store/Actions'
import '../Css/Navigation.css'

function Navigation() {
  const date = useSelector(state => state.date)
  const menu = useSelector(state => state.menu)
  const location = useSelector(state => state.location)
  const dispatch = useDispatch()
  const history = useHistory()

  function goToLocationPage () {
    history.push('/location')
  }

  function changeDate(params) {
    dispatch(setDate(params))
  }

  function changeMenu(params) {
    dispatch(setMenu(params))
  }

  return (
    <div className='navigation'>

      {/* LOCATION */}
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <span class="material-icons">arrow_back</span>
        <div>
          <p style={{color: 'grey'}}>alamat penerima</p>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <p style={{fontWeight: 'bold'}}>{location ? location : 'masukkan alamat anda'}</p>
            <a href='#' onClick={goToLocationPage}><span class="material-icons" style={{color: 'red'}}>keyboard_arrow_down</span></a>
          </div>
        </div>
      </div>
      
      {/* DATE */}
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <button className={date ==='senin 19-april-2021' ? 'btn btn-sm btn-dark': 'btn btn-sm btn-outline-dark'} onClick={() => changeDate('senin 19-april-2021')}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p>Sen</p>
            <h6>19</h6>
          </div>
        </button>
        <button className={date ==='selasa 20-april-2021' ? 'btn btn-sm btn-dark': 'btn btn-sm btn-outline-dark'} onClick={() => changeDate('selasa 20-april-2021')}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p>Sel</p>
            <h6>20</h6>
          </div>
        </button>
        <button className={date ==='rabu 21-april-2021' ? 'btn btn-sm btn-dark': 'btn btn-sm btn-outline-dark'} onClick={() => changeDate('rabu 21-april-2021')}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p>Rab</p>
            <h6>21</h6>
          </div>
        </button>
        <button className={date ==='kamis 22-april-2021' ? 'btn btn-sm btn-dark': 'btn btn-sm btn-outline-dark'} onClick={() => changeDate('kamis 22-april-2021')}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p>Kam</p>
            <h6>22</h6>
          </div>
        </button>
        <button className={date ==='jumat 23-april-2021' ? 'btn btn-sm btn-dark': 'btn btn-sm btn-outline-dark'} onClick={() => changeDate('jumat 23-april-2021')}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p>Jum</p>
            <h6>23</h6>
          </div>
        </button>
        <button className='btn btn-sm btn-outline-dark' disabled>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p>Sab</p>
            <h6>24</h6>
          </div>
        </button>
        <button className='btn btn-sm btn-outline-dark' disabled>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p>Mig</p>
            <h6>25</h6>
          </div>
        </button>
      </div>
      {/* MENU */}
      <div className="btn-group" style={{padding: 5}}>
        <button className={menu ==='lunch' ? 'btn btn-sm btn-dark': 'btn btn-sm btn-outline-dark'} onClick={() => changeMenu('lunch')}>Lunch</button>
        <button className={menu ==='dinner' ? 'btn btn-sm btn-dark': 'btn btn-sm btn-outline-dark'} onClick={() => changeMenu('dinner')}>dinner</button>
      </div>
    </div>
  )
}

export default Navigation

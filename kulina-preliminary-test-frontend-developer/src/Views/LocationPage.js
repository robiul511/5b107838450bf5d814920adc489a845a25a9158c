import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import SugestionLocation from '../Components/SugestionLocation'
import { setLocation } from '../Store/Actions'

function LocationPage() {
  const [inputLocation, setInputLocation] = useState('')
  const sugestionLocations = useSelector(state => state.sugestionLocations)
  const history = useHistory()
  const dispatch = useDispatch()

  function goToHomePage () {
    history.push('/')
  }

  function changeInputLocation(value) {
    setInputLocation(value)
  }

  function changeLocation() {
    dispatch(setLocation(inputLocation))
    history.push('/')
  }
  return (
    <div style={{marginTop: 200, display: 'flex', flexDirection: 'column'}}>
      <a href='#' onClick={goToHomePage}  style={{textAlign: 'right'}}><span className="material-icons">close</span></a>
      <h4>Cek makanan yang tersedia di lokasi Kamu!</h4>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <span className="material-icons" style={{color: 'red'}}>location_on</span>
        <input type= 'text' onChange={(e) => changeInputLocation(e.target.value)} placeholder='Warung Bebek Sinjay'/>
        <a href='#'><span className="material-icons" onClick={changeLocation}>search</span></a>
      </div>
      {
        inputLocation.length > 2 ? 
          sugestionLocations.map((sugestionLocation, index) => (
            <SugestionLocation data={sugestionLocation} key={index}/>
          ))
        : null
      }
    </div>
  )
}

export default LocationPage

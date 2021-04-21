import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { setLocation } from '../Store/Actions'

function SugestionLocation(props) {
  const { data } = props
  const dispatch = useDispatch()
  const history = useHistory()
  function changeLocation() {
    dispatch(setLocation(data.address))
    history.push('/')
  }
  return (
    <button style={{display: 'flex', margin: '10px', backgroundColor: 'white', borderRadius: '20px'}} onClick={changeLocation}>
      <span className="material-icons">location_on</span>
      <div>
        <h4>{data.name}</h4>
        <p style={{color: 'grey'}}>{data.address}</p>
      </div>
    </button>
  )
}

export default SugestionLocation

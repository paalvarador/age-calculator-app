import React from 'react'
import Assets from '../../assets/images/icon-arrow.svg'
import './Separator.css'

function Separator() {
  return (
    <div className='separator'>
        <div className='separator-hr'>
          
        </div>
        <div className='icon-arrow'>
          <img className='icon' src={Assets} alt='Icon arrow'></img>
        </div>
    </div>
  )
}

export default Separator

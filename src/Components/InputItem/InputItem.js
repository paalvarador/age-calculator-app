import React, { useState } from 'react'

import './InputItem.css'

function InputItem({label, placeholder}) {
  const [messageError, setMessageError] = useState('')
  const [stateError, setStateError] = useState('inactive')
  
  const handleBlur = (event) => {
    const id = event.target.id
    const value = event.target.value

    // First validation
    if(value === ''){
      setMessageError('This field is required')
      setStateError('active')
    }else if(id === 'day' && value > 31){
      setMessageError('Must be a valid day')
      setStateError('active')
    }else if(id === 'month' && value > 12){
      setMessageError('Must be a valid month')
      setStateError('active')
    }else if(id === 'year' && value > new Date().getFullYear()){
      setMessageError('Must be in the past')
      setStateError('active')
    }else{
      setMessageError('')
      setStateError('inactive')
    }
  }

  return (
    <div className='form-input'>
        <label className={`form-input-label ${stateError}`}>{label}</label>
        <input className={`form-input-placeholder ${stateError}`} id={label} type='text' placeholder={placeholder} onBlur={handleBlur}/>
        <label className='form-input-error'>{messageError}</label>
    </div>
  )
}

export default InputItem

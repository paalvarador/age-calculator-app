import React from 'react'
import InputItem from '../InputItem/InputItem'
import './input.css'

function Input() {
  return (
    <div className='input-data'>
        <form>
            <InputItem label='day' placeholder='dd'/>
            <InputItem label='month' placeholder='mm' />
            <InputItem label='year' placeholder='yyyy' />
        </form>
    </div>
  )
}

export default Input
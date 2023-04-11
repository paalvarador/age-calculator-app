import React from 'react'
import Input from '../Input/Input.js'
import Output from '../Output/Output.js'
import Separator from '../Separator/Separator.js'
import './Card.css'

function Card({year, month, day}) {
    return (
        <div className='card-main'>
            <Input />
            <Separator />
            <Output year={year} month={month} day={day} />
        </div>
    )
}

export default Card
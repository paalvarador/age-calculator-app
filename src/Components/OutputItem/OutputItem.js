import React from 'react'
import './OutputItem.css'

function OutputItem({value, type}) {
    return (
        <div className='output-data-item'>
            <p className='value'>{value != null ? value : '- -'}</p>
            <p className='type'>{type}</p>
        </div>
    )
}

export default OutputItem
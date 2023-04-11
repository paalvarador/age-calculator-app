import React from 'react'
import OutputItem from '../OutputItem/OutputItem'

function output({year, month, day}) {
    return (
        <>
            <div className='output-data'>
                <OutputItem value={year} type='years' /> 
                <OutputItem value={month} type='months' /> 
                <OutputItem value={day} type='days' /> 
            </div>

        </>
    )
}

export default output
import React from 'react'

export const InfoFlight = ({title,route}) => {
    return (
        <div className='info-flight mt-4 mr-4 ml-4 pb-1'>
            <h2 className='pl-1'>
                {title}
            </h2>
            <h3 className='pl-1'>
                {route}
            </h3>
        </div>
    )
}

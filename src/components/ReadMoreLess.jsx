import React, { useState } from 'react'

const ReadMoreLess = ({ children }) => {
    const [isReadMore, setIsReadMore] = useState(false)
    return (
        <p className='mb-2 text-sm transition ease-in-out'>
            {isReadMore ? children : children.substr(0, 250)}<br />
            <span className='cursor-pointer text-sky-500' onClick={() => setIsReadMore(!isReadMore)}>{isReadMore ? 'Voir moins' : 'Voir plus'}</span>
        </p>
    )
}

export default ReadMoreLess
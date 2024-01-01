import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Track() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            
        </div>
    )
}

export default Track
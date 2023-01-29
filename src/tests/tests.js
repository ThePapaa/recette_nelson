import React, { useEffect, useState, useRef } from 'react'
const Tests = () => {
    let [val,setVal] = useState(0)
    useEffect(() =>{
        setVal(val = val)
    },[])

    return (
        <div>
            <p>{val}</p>
        </div>
    )
}

export default Tests
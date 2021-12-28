import React, { useState } from 'react'

export const useScroll = () => {
    
    const [scroll, setScroll] = useState(0)

    window.onscroll = () => {
        setScroll(window.pageYOffset)   
    }
    return {
       scroll
    }
}

import React, { useEffect, useState } from 'react'

export const ItemBox = ({it,i}) => {
    const [styleBox, setStyleBox] = useState('')
    useEffect(() => {
        window.onscroll = () => {
            if(window.pageYOffset>=300) {
                if(i==0) {
                    setStyleBox('transition')
                    console.log(window.pageYOffset)
                }
            }    
            if(window.pageYOffset>=420) {
                if(i==1){
                    setStyleBox('transition')
                    console.log(window.pageYOffset)
                }
            }            
            if(window.pageYOffset>= 1234) {
                if(i==2) {
                    setStyleBox('transition')
                    console.log(window.pageYOffset)
                }
            }    
        }
    }, []);
    return (
        <div className={`item-box it-${i} ${styleBox}`}>
            {/* <div className={`background ${it.impar}`} style={{backgroundImage:`url(${require(`../../../../assets/img/home/${it.img}`)})`}}> */}
            <div className={`background ${it.impar}`}>
            </div>
            <div className={`info pr-4 pl-4 ${it.impar} info-${i}`}>
                <h2> {it.title} </h2>
                <p>
                    {it.p}
                </p>
            </div>
        </div>
    )
}


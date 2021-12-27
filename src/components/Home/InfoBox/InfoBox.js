import React, { memo, useEffect, useState } from 'react'
import { ItemBox } from './ItemBox/ItemBox'

export const InfoBox = memo(() => {

    const [styleBox, setStyleBox] = useState({})
    
    useEffect(() => {
        window.onscroll = () => {
            if(window.pageYOffset >= 250 && window.pageYOffset < 499) { 
                setStyleBox(prevState => ({...prevState, box1:'transition1'}))
            }    
            else if(window.pageYOffset >= 540 && window.pageYOffset <= 749) {
                setStyleBox(prevState => ({...prevState, box2:'transition2'}))
            }            
            else if(window.pageYOffset >=  950) {
                setStyleBox(prevState => ({...prevState, box3:'transition3'}))
            }    
        }
    }, []);
    
    const items = [
            {
               title:'Title 1',
               p:'Reprehenderit tempor anim proident nulla duis quis id in. Nostrud adipisicing consectetur incididunt nisi velit magna pariatur tempor consectetur.',
               img:'block1.jpg',
               impar:''
            },
            {
                title:'Title 2',
                p:'Reprehenderit tempor anim proident nulla duis quis id in. Nostrud adipisicing consectetur incididunt nisi velit magna pariatur tempor consectetur.',
                img:'block2.jpg',
                impar: 'impar'
            },
            {
                title:'Title 3',
                p:'Reprehenderit tempor anim proident nulla duis quis id in. Nostrud adipisicing consectetur incididunt nisi velit magna pariatur tempor consectetur.',
                img:'block3.jpg',
                impar: ''
            }
        ]

    return (
        <div className='info-boxes'>
            {
                items.map((it,i) => (
                        <ItemBox key={i} it={it} i={i} styleBox={(i==0) ? styleBox.box1 : (i==1) ? styleBox.box2 : styleBox.box3}/>
                    )
                )
            }
            
        </div>
    )
})

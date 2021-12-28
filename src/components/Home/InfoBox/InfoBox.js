import React, { memo, useEffect, useState } from 'react'
import { ItemBox } from './ItemBox/ItemBox'
import { useScroll } from '../../../hooks/useScroll';

export const InfoBox = memo(() => {

    const [styleBox, setStyleBox] = useState({})
    const {scroll} = useScroll()
    useEffect(() => {
        if(scroll>= 250 && scroll < 499) { 
            setStyleBox(prevState => ({...prevState, box1:'transition1'}))
        }    
        else if(scroll>= 540 && scroll <= 749) {
            setStyleBox(prevState => ({...prevState, box2:'transition2'}))
        }            
        else if(scroll >=  950) {
            setStyleBox(prevState => ({...prevState, box3:'transition3'}))
        }    
    }, [scroll]);
    
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

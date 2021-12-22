import React from 'react'
import { ItemBox } from './ItemBox/ItemBox'

export const InfoBox = () => {
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
                        <ItemBox it={it} i={i} key={i}/>
                    )
                )
            }
            
        </div>
    )
}

import React from 'react'
import { ItemBox } from './ItemBox/ItemBox'

export const InfoBox = () => {
    const items = [
            {
               title:'Title 1',
               p:'Reprehenderit tempor anim proident nulla duis quis id in. Nostrud adipisicing consectetur incididunt nisi velit magna pariatur tempor consectetur. Aliqua ad aliqua anim ullamco labore pariatur eiusmod sit quis do officia consectetur eiusmod et. Laborum anim velit cupidatat excepteur id eu esse magna amet. In nostrud id et ut culpa adipisicing id exercitation nisi voluptate ad. Elit elit excepteur aute voluptate eu anim occaecat nisi laborum aliqua sint quis enim ullamco.',
               img:'fondo.jpg',
               impar:''
            },
            {
                title:'Title 2',
                p:'Reprehenderit tempor anim proident nulla duis quis id in. Nostrud adipisicing consectetur incididunt nisi velit magna pariatur tempor consectetur. Aliqua ad aliqua anim ullamco labore pariatur eiusmod sit quis do officia consectetur eiusmod et. Laborum anim velit cupidatat excepteur id eu esse magna amet. In nostrud id et ut culpa adipisicing id exercitation nisi voluptate ad. Elit elit excepteur aute voluptate eu anim occaecat nisi laborum aliqua sint quis enim ullamco.',
                img:'fondo.jpg',
                impar: 'impar'
            },
            {
                title:'Title 3',
                p:'Reprehenderit tempor anim proident nulla duis quis id in. Nostrud adipisicing consectetur incididunt nisi velit magna pariatur tempor consectetur. Aliqua ad aliqua anim ullamco labore pariatur eiusmod sit quis do officia consectetur eiusmod et. Laborum anim velit cupidatat excepteur id eu esse magna amet. In nostrud id et ut culpa adipisicing id exercitation nisi voluptate ad. Elit elit excepteur aute voluptate eu anim occaecat nisi laborum aliqua sint quis enim ullamco.',
                img:'fondo.jpg',
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

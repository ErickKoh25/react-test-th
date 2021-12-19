import React from 'react'
import { Contact } from './Contact/Contact'
import { LogoFooter } from './LogoFooter/LogoFooter'
import { SocialMedia } from './SocialMedia/SocialMedia'

export const Footer = () => {
    return (
        <div className='footer'>
            <Contact/>
            <LogoFooter/>
            <SocialMedia/>
        </div>
    )
}

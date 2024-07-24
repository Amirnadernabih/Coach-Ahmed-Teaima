import React from 'react'
import Image from 'next/image'

export default function Header() {
    const headerStyle = {
        backgroundImage: 'url(/images/0.png)',
        width: '100%',
        height: '655px',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        clipPath: 'ellipse(100% 100% at 60% 90%)',

    };
    return (
        <>
            <div classname="header" style={headerStyle}></div>
        </>
    )
}

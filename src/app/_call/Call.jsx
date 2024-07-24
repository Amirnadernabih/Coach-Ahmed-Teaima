"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Call() {
    const phoneNumber = 1157870802;
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    return (
        <>
            <div className="call">
                <div className="container">
                    <Link className="w-icon" href={whatsappUrl} passHref>
                        <FontAwesomeIcon icon={faWhatsapp} size="3x" />
                    </Link>
                </div>
            </div>
        </>
    )
}

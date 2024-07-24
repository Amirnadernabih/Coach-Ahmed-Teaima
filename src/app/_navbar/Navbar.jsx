"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
export default function Navbar() {
    const pathname = usePathname()
    const phoneNumber = 1157870802;
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" href="#">
                        <Image src='/images/logo.png' alt='' width={120} height={120} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/services' ? 'active' : ''}`} href="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/clients' ? 'active' : ''}`} href="/clients">My Clients</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-icon nav-whatsapp" href={whatsappUrl} passHref><FontAwesomeIcon icon={faWhatsapp} size="1x" /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-icon nav-insta" href="https://www.instagram.com/ahmed.teaima?igsh=bTB3bXQwMng1eHg=" passHref><FontAwesomeIcon icon={faInstagram} size="1x" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

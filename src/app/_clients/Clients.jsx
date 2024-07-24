import React from 'react'
import styles from './Clients.module.css'
import Link from 'next/link';

export default function Clients() {
    const clientsStyle = {
        backgroundImage: 'url(/images/bgg.jpg)',
        width: '100%',
        height: '500px',
        backgroundSize: 'cover',
    };
    return (
        <>
            <div className={styles.overlay}></div>
            <div className={styles.clients} style={clientsStyle}>
                <div className="container">
                    <h1>STOP WISHING. START DOING.</h1>
                    <div className="row">
                        <div className="col-md-3">
                            <div className={styles.client}>
                                <img src='./images/11.png' className='w-100' alt='' />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className={styles.client}>
                                <img src='./images/12.png' className='w-100' alt='' />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className={styles.client}>
                                <img src='./images/14.png' className='w-100' alt='' />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className={styles.client}>
                                <img src='./images/10.png' className='w-100' alt='' />
                            </div>
                        </div>
                    </div>
                    <Link href="/clients"><button className={styles.btn}>See More</button></Link>
                </div>
            </div >
        </>
    )
}

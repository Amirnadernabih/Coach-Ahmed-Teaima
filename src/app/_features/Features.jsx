import React from 'react'
import styles from './Features.module.css'
import Image from 'next/image'

export default function Features() {
    return (
        <>
            <div className={styles.features}>
                <div className="container">
                    <h1>SET HIGH FITNESS GOALS</h1>
                    <span>After you decide to start training we will make sure you get the best fitness program. Our sport experts and latest sports equipment are the winning combination.</span>
                    <div className='row'>
                        <div className="col-md-4">
                            <div className={styles.feat}>
                                <Image src='/images/3.png' alt='' width={85} height={85} />
                                <h3>QUALITY EQUIPMENT</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aen ean commodo ligula eget dolor.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.feat}>
                                <Image src='/images/4.png' alt='' width={85} height={85} />
                                <h3>UNIQUE TO YOUR NEEDS</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aen ean commodo ligula eget dolor.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.feat}>
                                <Image src='/images/2.png' alt='' width={85} height={85} />
                                <h3>HEALTHY NUTRITION PLAN</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aen ean commodo ligula eget dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

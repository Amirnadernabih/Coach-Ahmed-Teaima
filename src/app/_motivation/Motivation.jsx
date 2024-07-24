import React from 'react'
import styles from './Motivation.module.css'

export default function Motivation() {
    return (
        <>
            <div className={styles.motivation}>
                <span>START YOUR</span>
                <h1>TRAINING TODAY</h1>
                <button className='btn btn-danger'>Start Now</button>
            </div>
        </>
    )
}

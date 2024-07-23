// components/Preloader.js
"use client";

import React, { useEffect, useState } from 'react';
import styles from '../page.module.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add(styles.preloaderActive);

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove(styles.preloaderActive);
    }, 3000); // Adjust the timeout as needed

    return () => {
      clearTimeout(timer);
      document.body.classList.remove(styles.preloaderActive);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.preloader}>
      <div className={styles.image}></div>
    </div>
  );
};

export default Preloader;

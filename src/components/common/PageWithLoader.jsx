import React, { useState, useEffect } from 'react';
import Preloader from './Preloader';

const PageWithLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this timeout based on actual load time

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {loading ? <Preloader />  : children}
    </>
  );
};

export default PageWithLoader;

import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
//   useRef
  const ref = useRef(null);

  useEffect(() => {
    // create a new intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
    //   at 50% of the viewport show...
      { threshold: 0.5 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []); // No additional arguments, just runs once

  return { ref, isVisible };
};

export default useIntersectionObserver;
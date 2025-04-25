import { useEffect, useState } from "react";

// how to use
// const mobile = useWindow(767) < 768
// returns true/false

const useWindow = (size) => {
  // getWindowDimensions
  const [windowSize, setWindowSize] = useState(size || 768);
  
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    function viewport() {
      var width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      setWindowSize(width);
    }
    
    viewport();
    window.addEventListener('resize', viewport);
    
    return () => {
      window.removeEventListener('resize', viewport);
    };
  }, []);

  return windowSize;
};

export default useWindow;

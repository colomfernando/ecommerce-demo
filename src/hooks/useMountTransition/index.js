import { bool, number } from 'prop-types';
import { useState, useEffect } from 'react';

const useMountTransition = (isMounted, unmountDelay) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isMounted && !isTransitioning) return setIsTransitioning(true);

    if (!isMounted && isTransitioning)
      timeoutId = setTimeout(() => setIsTransitioning(false), unmountDelay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMounted, unmountDelay, isTransitioning]);

  return isTransitioning;
};

useMountTransition.propTypes = {
  isMounted: bool.isRequired,
  unmountDelay: number.isRequired,
};

useMountTransition.defaultProps = {
  unmountDelay: 300,
};

export default useMountTransition;

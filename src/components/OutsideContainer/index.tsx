import { StyledOutsideContainer } from '@/theme/styles/layout/StyledOutsideContainer';
import cx from 'classnames';
import { useEffect, useRef, useState } from 'react';

export const OutsideContainer = ({ children, onOutsideClick, state }) => {
  const wrapperRef = useRef(null);
  const [isClosing, setIsClosing] = useState(state);

  const outsideClasses = cx({
    show: state,
  });

  useEffect(() => {
    const handleOutsideClick = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onOutsideClick();
      }
    };
    console.log('state', state);

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.addEventListener('click', handleOutsideClick);
    };
  }, [onOutsideClick]);

  // useEffect(() => {
  //   if (!state) {
  //     const timer = setTimeout(() => {
  //       setIsClosing(false);
  //     }, 300);

  //     return () => clearTimeout(timer);
  //   }
  // }, [state]);

  return (
    <StyledOutsideContainer
      style={{
        display: !isClosing ? 'none' : 'block',
      }}
      className={outsideClasses}
      ref={wrapperRef}
    >
      {children}
    </StyledOutsideContainer>
  );
};

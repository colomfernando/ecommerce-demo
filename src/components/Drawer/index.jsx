import { arrayOf, bool, func, node, oneOfType, string } from 'prop-types';
import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import useMountTransition from 'hooks/useMountTransition';
import Styles from './styles';

const ROOT_ID = 'drawer-root';

const createDrawerRoot = () => {
  const root = document.createElement('div');
  root.setAttribute('id', ROOT_ID);

  return root;
};

const Drawer = ({ isOpen, onClose, position, children, removeWhenClosed }) => {
  if (!children) return null;

  const isTransitioning = useMountTransition(isOpen, 300);

  const bodyRef = useRef(document.querySelector('body'));
  const portalRef = useRef(
    document.getElementById(ROOT_ID) || createDrawerRoot()
  );

  useEffect(() => {
    bodyRef.current.appendChild(portalRef.current);

    return () => {
      portalRef.current.remove();
      bodyRef.current.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const setBodyScroll = () => {
      if (isOpen) {
        return (
          (bodyRef.current.style.overflow = 'hidden'),
          (bodyRef.current.style.paddingRight = '15px')
        );
      }

      return (
        (bodyRef.current.style.overflow = ''),
        (bodyRef.current.style.paddingRight = '0')
      );
    };

    setBodyScroll();
  }, [isOpen]);

  useEffect(() => {
    const onKeyPress = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keyup', onKeyPress);
    }
    return () => {
      window.removeEventListener('keyup', onKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isTransitioning && !isOpen && removeWhenClosed) return null;

  return createPortal(
    <>
      <Styles.Drawer
        position={position}
        isOpen={isOpen && isTransitioning}
        aria-hidden={isOpen ? 'false' : 'true'}
      >
        {children}
      </Styles.Drawer>
      <Styles.Overlay isOpen={isOpen} className="backdrop" onClick={onClose} />
    </>,
    portalRef.current
  );
};

Drawer.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
  isOpen: bool.isRequired,
  onClose: func,
  position: string,
  removeWhenClosed: bool,
};

Drawer.defaultProps = {
  onClose: null,
  position: 'right',
  removeWhenClosed: true,
};

export default Drawer;

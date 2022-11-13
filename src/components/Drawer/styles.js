import styled, { css } from 'styled-components';
import colors from 'theme/colors';
import breakpoints from 'theme/breakpoints';

const TIME_TRANSITION = '0.3s';

const setPosition = {
  right: css`
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(100%)'};
    ${breakpoints.sm} {
      width: 360px;
    }
  `,
  top: css`
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 260px;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  `,
  left: css`
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(-100%)'};

    ${breakpoints.sm} {
      width: 360px;
    }
  `,
  bottom: css`
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 260px;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(0)' : 'translateY(100%)'};
  `,
};

const Drawer = styled.div`
  background-color: ${colors.white};
  overflow: auto;
  position: fixed;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  ${({ position }) => setPosition[position]};
  transition: transform ${TIME_TRANSITION} ease;
`;

const Overlay = styled.div`
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  background: rgba(0, 0, 0, 0.5);
  transition: opacity ${TIME_TRANSITION} ease visibility ${TIME_TRANSITION} ease;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  z-index: ${({ isOpen }) => (isOpen ? '999' : '0')};
`;

Drawer.displayName = 'Drawer';
Overlay.displayName = 'Overlay';

export default { Drawer, Overlay };

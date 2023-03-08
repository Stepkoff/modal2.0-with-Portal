import React, {useEffect, useState, useRef} from "react";
import Portal from "../Portal";
import s from './index.module.sass';
import {CSSTransition} from 'react-transition-group';
import animationStyles from './animations.module.sass';
const ANIMATION_TIME = 200;

const useMount = ({isOpened}: {isOpened: boolean}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if(isOpened && !mounted) {
      setMounted(true);
    } else if (!isOpened && mounted) {
      setTimeout(() => {
        setMounted(false)
      }, ANIMATION_TIME)
    }
  }, [isOpened])
  return {mounted}
}

const overlayAnimation = {
  enter: animationStyles.overlayEnter,
  enterActive: animationStyles.overlayEnterActive,
  exit: animationStyles.overlayExit,
  exitActive: animationStyles.overlayExitActive,
};
const contentAnimation = {
  enter: animationStyles.contentEnter,
  enterActive: animationStyles.contentEnterActive,
  exit: animationStyles.contentExit,
  exitActive: animationStyles.contentExitActive,
};

interface layoutProps {
  children: React.ReactNode
  onClose: () => void
  isOpened: boolean
}
export const Layout = ({ onClose, children, isOpened }: layoutProps) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const [animationIn, setAnimationIn] = useState(false);
  useEffect(() => {
    setAnimationIn(isOpened);
  }, [isOpened]);
  return (
    <div className={s.container}>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimation}
      >
        <div ref={overlayRef} className={s.overlay} onClick={onClose} />
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <div ref={contentRef} className={s.content}>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

interface ModalProps {
  children: React.ReactNode
  isOpened: boolean
  onClose: () => void
}
const Modal = ({children, onClose, isOpened}: ModalProps) => {
  const {mounted} = useMount({isOpened});
  if(!mounted) return null
  return (
    <Portal>
      <Layout onClose={onClose} isOpened={isOpened}>
        {children}
      </Layout>
    </Portal>
  );
};

export default Modal;
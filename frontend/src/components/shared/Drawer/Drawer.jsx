import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import DrawerOverlay from './DrawerOverlay';

const Drawer = ({
  open,
  onClose,
  children,
  side = 'right',
  width = 'w-[380px]',
  closeOnOverlayClick = true,
  closeOnEsc = true
}) => {

  const drawerRef = useRef(null)
  const [isMounted, setIsMounted] = useState(open);
  const [isClosing, setIsClosing] = useState(false);

  //handle transition
  useEffect(() => {
    if (open) {
      setIsMounted(true);
      setIsClosing(false);
    } else if (isMounted) {
      setIsClosing(true);
    }
  }, [open]);

  //animation end
  const handleAnimationEnd = () => {
    if (isClosing) {
      setIsMounted(false);
      setIsClosing(false);
    }
  };

  //Esc
  useEffect(() => {
    if (!open || !closeOnEsc) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMounted, closeOnEsc, onClose])

  // Body scroll lock

  useEffect(() => {

    if (!isMounted) return;

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMounted])

  // Outside

  const handleOverlayClick = (e) => {

    if (
      closeOnOverlayClick &&
      e.target === e.currentTarget
    ) {
      onClose();
    }
  }

  if (!isMounted) return null;

  return createPortal(

    <DrawerOverlay onClick={handleOverlayClick}>
      <aside

        ref={drawerRef}
        onAnimationEnd={handleAnimationEnd}
        className={`
            fixed
            top-0
            ${side === "right" ? "right-0" : "left-0"}
            h-screen
            ${width}
            max-w-full
            bg-white
            shadow-2xl
            z-100
            flex
            flex-col
             ${isClosing
            ? "animate-slide-out"
            : "animate-slide-in"
          }
            
        `}
      >

        {children}

      </aside>

    </DrawerOverlay>,

    document.body

  );

};

export default Drawer;
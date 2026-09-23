const DrawerOverlay = ({
  children,
  onClick,
}) => {

  return (

    <div

      onClick={onClick}

      className="
        fixed
        inset-0
        z-50
        bg-black/40
        backdrop-blur-[1px]
        animate-overlay
    "

    >

      {children}

    </div>

  );

};

export default DrawerOverlay;
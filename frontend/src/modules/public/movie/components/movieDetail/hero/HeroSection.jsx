import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";



const HeroSection = ({ movie }) => {
  
  return (
   <>
      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopHero movie={movie} />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <MobileHero movie={movie} />
      </div>
    </>
  );
};

export default HeroSection;
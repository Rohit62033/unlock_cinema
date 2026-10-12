import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";



const HeroSection = ({ movie,handleBooking }) => {
  
  return (
   <>
      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopHero 
        movie={movie}
        handleBooking={handleBooking}
        />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <MobileHero movie={movie} />
      </div>
    </>
  );
};

export default HeroSection;
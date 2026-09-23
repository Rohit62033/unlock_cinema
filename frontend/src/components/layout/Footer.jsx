import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#333338] text-gray-400 mt-10">

      {/* Logo Between Horizontal Line */}
      <div className="relative flex items-center justify-center pt-8 px-2">

        {/* Left Line */}
        <div className="flex-1 h-px bg-gray-600" />

        {/* Logo */}
        <div className="px-6 bg-[#333338]">
          {/* <img
            src="/logo.png"
            alt="unlockCinema"
            className="h-10 object-contain"
          /> */}
          <p className=" text-[#808080]">Unlock cinema</p>

        </div>

        {/* Right Line */}
        <div className="flex-1 h-px bg-gray-600" />
      </div>


      {/* Social Icons */}
      <div className="flex justify-center items-center gap-5 mt-8">
        <SocialIcon icon={<FaFacebook size={20} fill="gray" />} />
        <SocialIcon icon={<FaTwitter size={20} fill="gray" />} />
        <SocialIcon icon={<FaInstagram size={20} fill="gray" />} />
        <SocialIcon icon={<FaYoutube size={20} fill="gray" />} />
        <SocialIcon icon={<FaPinterest size={20} fill="gray" />} />
        <SocialIcon icon={<FaLinkedin size={20} fill="gray" />} />
      </div>

      {/* Copyright Text */}
      <div className="max-w-5xl mx-auto text-center text-xs leading-6 px-5 pt-10 pb-12">
        <p className=" text-[#808080]">
          Copyright 2026 © unlock cinema Entertainment Pvt. Ltd. All Rights
          Reserved.
        </p>

        <p className="mt-2 text-xs  text-[#808080]">
          The content and images used on this site are copyright protected and
          copyrights vests with the respective owners. The usage of the content
          and images on this website is intended to promote the works and no
          endorsement of the artist shall be implied. Unauthorized use is
          prohibited and punishable by law.
        </p>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => {
  return (
    <button
      className="
        w-11 
        h-11 
        rounded-full 
        bg-gray-500/40
        hover:bg-white
        hover:text-black
        transition-all
        duration-300
        flex
        items-center
        justify-center
        text-gray-300
      "
    >
      {icon}
    </button>
  );
};

export default Footer;
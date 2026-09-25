import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import Navbar from "./navbar/Navbar.jsx";
import SearchDrawer from "./navbar/SearchDrawer.jsx";
import LocationDrawer from "@/modules/public/home/components/LocationDrawer.jsx";
import AuthModal from "@/modules/public/auth/AuthModel.jsx";

const MainLayout = () => {
  const banners = [
    {
      "_id": "1",
      "image": "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1776147441443_popwebnew.jpg",
      "type": "movie",
      "targetId": "movie123",
      "title": "Avengers Special",
      "redirectUrl": "/movie/movie123"
    },
    {
      "_id": "2",
      "image": "https://picsum.photos/seed/picsum/1200/200",
      "type": "event",
      "targetId": "event456",
      "title": "Live Concert",
      "redirectUrl": "/event/event456"
    },
    {
      "_id": "3",
      "image": "https://picsum.photos/seed/picsum/1200/200",
      "type": "external",
      "redirectUrl": "https://offers.paytm.com"
    }
  ]
  return (
    <>
      <Navbar />
      <SearchDrawer />
      <LocationDrawer />
      <AuthModal />
      <div className="flex flex-col min-h-dvh w-full max-w-8xl bg-[#f5f5f5]">

        {/* Top Navigation */}


        <main className="flex-1 w-full">


          <div className="">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </>
  );
};

export default MainLayout;
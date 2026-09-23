import ProfileContent from "./profileContent/sections/ProfileSection/components/ProfileContent";
import ProfileSidebar from "./profileSidebar/ProfileSidebar";


const ProfileLayout = () => {


  return (

    <section className="bg-slate-50 min-h-screen">

      <div
        className="
                    max-w-7xl
                    mx-auto
                    px-4
                    py-8
                "
      >

        <div
          className="
                        flex
                        gap-6
                    "
        >

          <ProfileSidebar />

          <ProfileContent />

        </div>

      </div>

    </section>

  );

};

export default ProfileLayout;
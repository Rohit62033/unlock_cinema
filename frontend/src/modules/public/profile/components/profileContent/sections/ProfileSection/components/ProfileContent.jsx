import { Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { PROFILE_SECTIONS } from "../../../profileSections";
import ProfileContentSkeleton from "./ProfileContentSkeleton";


const ProfileContent = () => {

    const [searchParams] = useSearchParams();

    const activeTab = searchParams.get("tab") || "profile";

    const ActiveSection =
        PROFILE_SECTIONS[activeTab] ||
        PROFILE_SECTIONS.profile;

    return (

        <main className="flex-1">

            <Suspense
                fallback={<ProfileContentSkeleton />}
            >

                <ActiveSection />

            </Suspense>

        </main>

    );

};

export default ProfileContent;
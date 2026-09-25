import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

const ProfileAvatar = ({ user, className }) => {    

    const initials = 
        `${user?.firstName?.[0] ?? ""}${user?.lastName?.[0] ?? ""}`;

    return (

        <Avatar className={className ?? "h-28 w-28"}>

            <AvatarImage
                src={user?.avatar?.url}
                alt="Profile avatar"
            />

            <AvatarFallback className="text-3xl">
                {initials || "U"}
            </AvatarFallback>

        </Avatar>

    );

};

export default ProfileAvatar;
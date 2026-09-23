import { lazy } from "react";

export const PROFILE_SECTIONS = {

    profile: lazy(() => import("./sections/ProfileSection/ProfileSection")),

    orders: lazy(() => import("./sections/OrdersSection")),

    devices: lazy(() => import("./sections/DevicesSection")),

    stream: lazy(() => import("./sections/StreamLibrarySection")),

    wishlist: lazy(() => import("./sections/WishlistSection")),

    quickpay: lazy(() => import("./sections/QuickPaySection")),

    rewards: lazy(() => import("./sections/RewardsSection")),

};
import {
  User,
  ClipboardList,
  Smartphone,
  Tv,
  Heart,
  WalletCards,
  Gift,
} from "lucide-react";

export const PROFILE_SIDEBAR_MENU = [
  {
    id: "profile",
    label: "Profile",
    icon: User,
    path: "/profile",
  },

  {
    id: "orders",
    label: "Your Orders",
    icon: ClipboardList,
    path: "/profile/orders",
  },

  {
    id: "devices",
    label: "Saved Devices",
    icon: Smartphone,
    path: "/profile/devices",
  },

  {
    id: "stream",
    label: "Stream Library",
    icon: Tv,
    path: "/profile/stream",
  },

  {
    id: "wishlist",
    label: "Your Wishlist",
    icon: Heart,
    path: "/wishlist",
  },

  {
    id: "quickpay",
    label: "QuickPay",
    icon: WalletCards,
    path: "/profile/quickpay",
  },

  {
    id: "rewards",
    label: "Rewards",
    icon: Gift,
    path: "/profile/rewards",
  },
];
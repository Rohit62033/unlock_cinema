import {
  Bell,
  ShoppingBag,
  Heart,
  Tv,
  CreditCard,
  CircleHelp,
  Settings,
  Gift,
  RefreshCcw,
} from "lucide-react";

export const PROFILE_MENU = [
  {
    id: "notifications",
    label: "Notifications",
    description: "",
    icon: Bell,
    path: "/notifications",

    requiresAuth: false,
    showWhenGuest: true,
    showLockIcon: false,
  },

  {
    id: "orders",
    label: "Your Orders",
    description: "View all your bookings & purchases",
    icon: ShoppingBag,
    path: "/my-profile?tab=orders",

    requiresAuth: true,
    showWhenGuest: true,
    showLockIcon: true,
  },

  {
    id: "wishlist",
    label: "Your Wishlist",
    description: "",
    icon: Heart,
    path: "/my-profile?tab=wishlist",

    requiresAuth: false,
    showWhenGuest: true,
    showLockIcon: false,
  },

  {
    id: "stream-library",
    label: "Stream Library",
    description: "Rented & Purchased Movies",
    icon: Tv,
    path: "/my-profile?tab=stream-library",

    requiresAuth: true,
    showWhenGuest: true,
    showLockIcon: true,
  },

  {
    id: "play-credit-card",
    label: "Play Credit Card",
    description: "View your Play Credit Card details and offers",
    icon: CreditCard,
    path: "/my-profile?tab=credit-card",

    requiresAuth: false,
    showWhenGuest: true,
    showLockIcon: false,
  },

  {
    id: "help-support",
    label: "Help & Support",
    description: "View commonly asked queries and Chat",
    icon: CircleHelp,
    path: "/help",

    requiresAuth: false,
    showWhenGuest: true,
    showLockIcon: false,
  },

  {
    id: "account-settings",
    label: "Accounts & Settings",
    description: "Location, Payments, Permissions & More",
    icon: Settings,
    path: "/my-profile?tab=settings",

    requiresAuth: true,
    showWhenGuest: true,
    showLockIcon: true,
  },

  {
    id: "rewards",
    label: "Rewards",
    description: "View your rewards & unlock new ones",
    icon: Gift,
    path: "/my-profile?tab=rewards",

    requiresAuth: false,
    showWhenGuest: true,
    showLockIcon: false,
  },

  {
    id: "book-a-change",
    label: "BookAChange",
    description: "",
    icon: RefreshCcw,
    path: "/my-profile?tab=book-a-change",

    requiresAuth: false,
    showWhenGuest: true,
    showLockIcon: false,
  },
];
// src/constants/sidebarItems.js

import {
  LayoutDashboard,
  Film,
  Users,
  Building2,
  CalendarClock,
  Ticket,
  BarChart3,
} from "lucide-react";

export const adminSidebarNavigation = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
    label: "Movies",
    icon: Film,
    path: "/admin/movies",
  },
  {
    label: "Persons",
    icon: Users,
    path: "/admin/persons",
  },
  {
    label: "Theatres",
    icon: Building2,
    path: "/admin/theatres",
  },
  {
    label: "Shows",
    icon: CalendarClock,
    path: "/admin/shows",
  },
  {
    label: "Bookings",
    icon: Ticket,
    path: "/admin/bookings",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    path: "/admin/analytics",
  },
];
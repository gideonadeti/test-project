"use client";

import { NavItem } from "./NavItem";
import { IconMapKey } from "../lib/iconMap";

const navItems: { name: string; route: string; icon: IconMapKey }[] = [
  {
    name: "Dashboard",
    route: "/dashboard",
    icon: "DashboardIcon",
  },
  {
    name: "Products",
    route: "/dashboard/products",
    icon: "LocalMallIcon",
  },
  {
    name: "Orders",
    route: "/dashboard/orders",
    icon: "StoreIcon",
  },
  {
    name: "Delivery",
    route: "/dashboard/delivery",
    icon: "RouteIcon",
  },
  {
    name: "Payments",
    route: "/dashboard/payments",
    icon: "PaymentIcon",
  },
  {
    name: "Users",
    route: "/dashboard/users",
    icon: "GroupsIcon",
  },
  {
    name: "Vehicles",
    route: "/dashboard/vehicles",
    icon: "LocalShippingIcon",
  },
  {
    name: "Documents",
    route: "/dashboard/documents",
    icon: "FolderIcon",
  },
  {
    name: "Settings",
    route: "/dashboard/settings",
    icon: "SettingsIcon",
  },
];

export function Sidebar() {
  return (
    <div className="bg-white border-r border-r-slate-300 flex flex-col pr-12">
      {navItems.map((navItem) => (
        <NavItem
          key={navItem.name}
          name={navItem.name}
          route={navItem.route}
          icon={navItem.icon}
        />
      ))}
    </div>
  );
}

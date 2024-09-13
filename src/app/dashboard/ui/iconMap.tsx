import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FolderIcon from "@mui/icons-material/Folder";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GroupsIcon from "@mui/icons-material/Groups";
import StoreIcon from "@mui/icons-material/Store";
import PaymentIcon from "@mui/icons-material/Payment";
import RouteIcon from "@mui/icons-material/Route";

export const iconMap = {
  DashboardIcon: <DashboardIcon />,
  LocalMallIcon: <LocalMallIcon />,
  StoreIcon: <StoreIcon />,
  RouteIcon: <RouteIcon />,
  PaymentIcon: <PaymentIcon />,
  GroupsIcon: <GroupsIcon />,
  LocalShippingIcon: <LocalShippingIcon />,
  FolderIcon: <FolderIcon />,
  SettingsIcon: <SettingsIcon />,
};

export type IconMapKey = keyof typeof iconMap;

import Image from "next/image";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";

import logo from "@/public/images/logo.svg";
import headset from "@/public/images/headset.svg";

export function Header() {
  return (
    <div className="flex flex-row justify-between items-center lg:px-12 px-3 shadow-md shadow-slate-100">
      <div className="flex flex-row items-center justify-center lg:text-2xl text-sm font-medium">
        <Image
          src={logo}
          alt="admin logo"
          width={40}
          height={40}
          className="lg:mr-4 mr-2"
        />
        <span className="lg:block hidden">Admin Dashboard</span>
      </div>
      <div className="text-xs lg:text-lg flex flex-row gap-3 lg:p-4 p-1 px-2 items-center justify-center">
        <div className="bg-slate-100 p-2 rounded-full lg:mr-1 mr-1">
          <Image src={headset} alt="mic" height={30} width={30} />
        </div>
        <div className="bg-slate-100 p-2 rounded-full lg:mr-2 mr-1 w-30 h-30">
          <NotificationsIcon />
        </div>
        <div>
          <PersonIcon sx={{ width: 30, height: 30 }} />
        </div>
        <div className="flex-col justify-start">
          <p className="font-bold text-md">Gideon Adeti</p>
          <p className="font-regular text-sm text-gray-400">
            gideonadeti@gmail.com
          </p>
        </div>
        <div>
          <ExpandMoreIcon className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

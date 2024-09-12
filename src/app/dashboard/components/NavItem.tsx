import { usePathname } from "next/navigation";
import Link from "next/link";
import { IconMapKey, iconMap } from "../lib/iconMap";

export function NavItem({
  name,
  route,
  icon,
}: {
  name: string;
  route: string;
  icon: IconMapKey;
}) {
  const pathname = usePathname();

  const style =
    pathname === route
      ? "border-l-8 border-l-secondary-red text-secondary-red"
      : "text-slate-400 hover:text-slate-600";

  return (
    <Link
      href={route}
      className={`flex flex-row items-center p-4 mr-10 ${style}`}
    >
      <div className="mr-4">{iconMap[icon]}</div>
      <div>{name}</div>
    </Link>
  );
}

"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function Search() {
  return (
    <div className="col-span-2 flex flex-row gap-6">
      <SearchInput />
      <SearchSelect />
    </div>
  );
}

function SearchSelect() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelectChange = (role: string) => {
    const params = new URLSearchParams(searchParams);
    if (role && role !== "all") {
      params.set("role", role);
    } else {
      params.delete("role");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      className="border px-2 py-1 rounded flex-1"
      onChange={(e) => handleSelectChange(e.target.value)}
      defaultValue={searchParams.get("role") || "all"}
    >
      <option value="all">All</option>
      <option value="retailer">Retailers</option>
      <option value="distributor">Distributors</option>
      <option value="driver">Drivers</option>
      <option value="admin">Internal Admins</option>
    </select>
  );
}

function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((name: string) => {
    const params = new URLSearchParams(searchParams);
    if (name) {
      params.set("name", name);
    } else {
      params.delete("name");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      type="text"
      className="border px-2 py-1 rounded flex-1"
      placeholder="Search user"
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get("name") || ""}
    />
  );
}

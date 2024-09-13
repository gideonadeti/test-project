import { Suspense } from "react";

import { Search } from "./components/Search";
import { AddInvite } from "./components/AddInvite";
import { SearchResults } from "./components/SearchResults";

export default function Users({
  searchParams,
}: {
  searchParams?: {
    name?: string;
    userType?: string;
  };
}) {
  return (
    <div className="py-6 flex-1">
      <div className="px-8">
        <h1 className="text-3xl font-medium">All Users</h1>
        <p>
          A list of all users, including retailers, distributors, drivers, and
          internal admins.
        </p>
        <div className="grid grid-cols-3 gap-12 mt-6 mb-4">
          <Suspense>
            <Search />
          </Suspense>
          <AddInvite />
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

function Loading() {
  return (
    <div className="w-full flex justify-center">
      <div className="animate-spin border-t-4 border-b-4 border-l-2 border-r-2 border-blue-500 rounded-full h-8 w-8">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

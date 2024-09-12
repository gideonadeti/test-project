import { Search } from "./components/Search";
import { AddInvite } from "./components/AddInvite";

export default function Users() {
  return (
    <div className="px-8 py-6 flex-1">
      <h1 className="text-3xl font-medium">All Users</h1>
      <p>
        A list of all users, including retailers, distributors, drivers, and
        internal admins.
      </p>
      <div className="grid grid-cols-3 gap-12 mt-6 mb-4">
        <Search />
        <AddInvite />
      </div>
    </div>
  );
}

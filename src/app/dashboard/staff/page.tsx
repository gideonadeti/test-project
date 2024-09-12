import { Search } from "./components/Search";

export default function Staff() {
  return (
    <div className="px-8 py-6 flex-1">
      <h1 className="text-3xl font-medium">All Staff</h1>
      <p>
        A list of all staff, including retailers, distributors, drivers, and
        internal admins.
      </p>
      <div className="grid grid-cols-3 gap-4 mt-6 mb-4">
        <Search />
      </div>
    </div>
  );
}

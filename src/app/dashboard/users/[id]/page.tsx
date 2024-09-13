import { getUser } from "../lib/data";

export default async function User({ params }: { params: { id: string } }) {
  const { id } = params;
  const user = await getUser(id);

  if (!user) {
    return (
      <div className="mx-auto mt-5">
        <h1 className="text-xl font-semibold">
          Error: Could not find user with id {id}
        </h1>
      </div>
    );
  }

  return (
    <div className="mt-5 px-8">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-500">{user.email}</p>
      </div>
      <div className="mb-4">
        <p>Role: {user.role}</p>
        <p>Status: {user.status}</p>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition">
          Reset password
        </button>
        <button className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition">
          Ban
        </button>
        <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition">
          Delete
        </button>
      </div>
    </div>
  );
}

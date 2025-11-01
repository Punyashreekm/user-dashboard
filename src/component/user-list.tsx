export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  website?: string;
  company?: { name?: string };
};

export default function UserCardList({ users }: { users: User[] }) {
  return (
    <div className="p-6 px-0 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {users?.map((user) => (
        <div
          key={user.id}
          className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition-shadow"
        >
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
            <p className="text-sm text-gray-500">@{user.username}</p>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-700">Email</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700">Company</p>
              <p className="text-sm text-gray-600">{user.company?.name}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700">Website</p>
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-600 hover:underline"
              >
                {user.website}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

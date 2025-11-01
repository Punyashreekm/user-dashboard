import type React from "react";
import UserCardList from "./component/user-list";
import { useGetUsersQuery } from "./services/users";
import { useSearchParams } from "react-router";

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const { data, error, isLoading } = useGetUsersQuery({ q: q });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prev) => {
      prev.set("q", e.target.value);
      return prev;
    });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-5 px-5">
      <h1 className="text-3xl font-bold ">Users Dashboard</h1>
      <input
        type="text"
        value={q}
        placeholder="Search"
        onChange={handleSearch}
        className="w-full p-1.5 border rounded-md"
      />
      {data?.length === 0 && !isLoading && <div>No users found</div>}
      {error && <div>Error while fetching the users</div>}
      {isLoading && <div>Users Loading...</div>}
      <UserCardList users={data} />
    </div>
  );
};

export default App;

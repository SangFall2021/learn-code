export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  params: {
    name: string;
    personId: string;
  };
  setParams: (params: SearchPanelProps["params"]) => void;
}

export const SearchPanel = ({ users, params, setParams }: SearchPanelProps) => {
  return (
    <form>
      <div>
        <input
          type="text"
          value={params.name}
          onChange={(event) =>
            setParams({
              ...params,
              name: event.target.value,
            })
          }
        />
        <select
          value={params.personId}
          onChange={(event) =>
            setParams({
              ...params,
              personId: event.target.value,
            })
          }
        >
          <option value="">负责人</option>
          {users.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

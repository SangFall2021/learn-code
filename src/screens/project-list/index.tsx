import { useState, useEffect } from "react";
import * as qs from "qs";
import { clearnObj, useMount, useDebounce } from "utils";
import { SearchPanel } from "./search-panel";
import { List } from "./list";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  const debounceParams = useDebounce(params, 200);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(clearnObj(debounceParams))}`).then(
      async (res) => {
        if (res.ok) {
          setList(await res.json());
        }
      }
    );
  }, [debounceParams]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });

  return (
    <div>
      <SearchPanel users={users} params={params} setParams={setParams} />
      <List users={users} list={list} />
    </div>
  );
};

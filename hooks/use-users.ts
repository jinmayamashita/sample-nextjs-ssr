import { useQuery } from "@tanstack/react-query";
import { sleep } from "../utils/sleep";

export async function getUsers() {
  await sleep(3);
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
}

export function useUsers() {
  return useQuery({ queryKey: ["users"], queryFn: getUsers });
}

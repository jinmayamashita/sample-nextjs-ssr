import { useQuery } from "@tanstack/react-query";
import { sleep } from "../utils/sleep";

export async function getPosts() {
  await sleep(5);
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}

export function usePosts() {
  return useQuery({ queryKey: ["posts"], queryFn: getPosts });
}

import { getUsers, useUsers } from "../hooks/use-users";
import { getPosts, usePosts } from "../hooks/use-posts";
import { Skeleton } from "../components/skeleton";
import { LayoutSection } from "../components/layout-section";
import { Items } from "../components/items";
import { QueryClient, dehydrate } from "@tanstack/react-query";

export default function Page() {
  const users = useUsers();
  const posts = usePosts();

  const isUsersLoading = users.isLoading || users.isFetching;
  const isPostsLoading = posts.isLoading || posts.isFetching;

  return (
    <>
      <header>App Header</header>

      <main>
        <h1>Hello!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At non cum,
          beatae earum!
        </p>

        <div style={style}>
          <LayoutSection>
            <button onClick={() => posts.refetch()}>
              Client side data fetching
            </button>
            <h2>Posts</h2>

            {isPostsLoading ? <Skeleton /> : <Items items={posts.data} />}
          </LayoutSection>

          <LayoutSection>
            <button onClick={() => users.refetch()}>
              Client side data fetching
            </button>
            <h2>Users</h2>
            {isUsersLoading ? <Skeleton /> : <Items items={users.data} />}
          </LayoutSection>
        </div>
      </main>
      <footer>App Footer</footer>
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({ queryKey: ["posts"], queryFn: getPosts });
  await queryClient.prefetchQuery({ queryKey: ["users"], queryFn: getUsers });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const style: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  margin: "24px 0",
};

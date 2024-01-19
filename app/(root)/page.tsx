import { currentUser } from '@clerk/nextjs';

import Headings from '@/components/Atoms/Headings/Headings';
import { fetchPosts } from '@/lib/actions/thread.actions';

export default async function Home() {
  const fetchedPosts = await fetchPosts(1, 30);

  const user = await currentUser();

  return (
    <>
      <Headings
        level={1}
        customClass="head-text text-left"
      >
        <>Home</>
      </Headings>

      <section className="mt-9 flex flex-col gap-10">
        {fetchedPosts.posts.map((post) => (
          <ThreadCard
            key={post._id}
            id={post._id}
            currentUserId={user?.id}
            parentId={post.parentId}
            content={post.text}
            author={post.author}
            community={post.community}
            createdAt={post.createdAt}
            comments={post.children}
          />
        ))}
      </section>
    </>
  );
}

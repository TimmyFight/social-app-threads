import { redirect } from 'next/navigation';

import { fetchUserPosts } from '@/lib/actions/user.actions';

import ThreadCard from '../ThreadCard/ThreadCard';

interface ThreadsTabProperties {
  currentUserId: string;
  accountId: string;
  acountType: string;
}

const ThreadsTab = async ({
  currentUserId,
  accountId,
  acountType,
}: ThreadsTabProperties) => {
  let result = await fetchUserPosts(accountId);

  if (!result) redirect('/');

  return (
    <section className="mt-9 flex flex-col gap-10">
      {result.threads.map((thread: any) => (
        <ThreadCard
          key={thread._id}
          id={thread._id}
          currentUserId={currentUserId}
          parentId={thread.parentId}
          content={thread.text}
          author={
            acountType === 'User'
              ? { name: result.name, image: result.image, id: result.id }
              : { name: thread.name, image: thread.image, id: thread.id }
          }
          community={thread.community}
          createdAt={thread.createdAt}
          comments={thread.children}
        />
      ))}
    </section>
  );
};

export default ThreadsTab;

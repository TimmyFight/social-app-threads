import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import BackButton from '@/components/Atoms/BackButton/BackButton';
import Comment from '@/components/Moleculs/Comment/Comment';
import ThreadCard from '@/components/Moleculs/ThreadCard/ThreadCard';
import { fetchThreadById } from '@/lib/actions/thread.actions';
import { fetchUser } from '@/lib/actions/user.actions';

const Page = async ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;

  const user = await currentUser();
  if (!user) redirect('/sign-in');

  const userInfo = await fetchUser(user.id);
  if (!userInfo) redirect('/onboarding');

  const thread = await fetchThreadById(params.id);

  return (
    <section className="relative">
      <div>
        <ThreadCard
          key={thread._id}
          id={thread._id}
          currentUserId={user?.id || ''}
          parentId={thread.parentId}
          content={thread.text}
          author={thread.author}
          community={thread.community}
          createdAt={thread.createdAt}
          comments={thread.children}
        />
      </div>

      <div className="mt-7">
        <Comment
          threadId={thread.id}
          currentUserImg={userInfo.image}
          currentUserId={JSON.stringify(userInfo._id)}
        />
      </div>

      <div className="mt-10">
        {thread.children.map((children: any) => (
          <ThreadCard
            key={children._id}
            id={children._id}
            currentUserId={user?.id || ''}
            parentId={children.parentId}
            content={children.text}
            author={children.author}
            community={children.community}
            createdAt={children.createdAt}
            comments={children.children}
            isComment
          />
        ))}
      </div>
      <BackButton />
    </section>
  );
};

export default Page;

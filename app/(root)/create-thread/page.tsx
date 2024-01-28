import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import Headings from '@/components/Atoms/Headings/Headings';
import PostThread from '@/components/Moleculs/PostThread/PostThread';
import { fetchUser } from '@/lib/actions/user.actions';

async function Page() {
  const user = await currentUser();

  if (!user) redirect('/sign-in');

  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onboarded) redirect('/onboarding');

  return (
    <>
      <Headings
        level={1}
        customClass="head-text"
      >
        <>Create Thread</>
      </Headings>
      <PostThread userId={userInfo._id} />
    </>
  );
}

export default Page;

import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import ProfileHeader from '@/components/Moleculs/ProfileHeader/ProfileHeader';
import { fetchUser } from '@/lib/actions/user.actions';

async function Page({ params }: { params: { id: string } }) {
  const user = await currentUser();

  if (!user) redirect('/sign-in');

  const userInfo = await fetchUser(params.id);

  if (!userInfo?.onboarded) redirect('/onboarding');

  return (
    <section>
      <ProfileHeader
        accountId={userInfo.id}
        authUserId={user.id}
        name={userInfo.name}
        username={userInfo.username}
        imgUrl={userInfo.image}
        bio={userInfo.bio}
      />
    </section>
  );
}

export default Page;

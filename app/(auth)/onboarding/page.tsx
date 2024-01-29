import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import Headings from '@/components/Atoms/Headings/Headings';
import Typography from '@/components/Atoms/Typography/Typography';
import AccountProfile from '@/components/Organisms/AccountProfile/AccountProfile';
import { fetchUser } from '@/lib/actions/user.actions';

async function Page() {
  const user = await currentUser();

  if (!user) redirect('/sign-in');

  const userInfo = await fetchUser(user.id);

  if (userInfo?.onboarded) redirect('/');

  const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user.username,
    name: userInfo ? userInfo?.name : user.firstName ?? '',
    bio: userInfo ? userInfo?.bio : '',
    image: userInfo ? userInfo?.image : user.imageUrl,
  };

  return (
    <main className="max-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <Headings
        level={1}
        customClass="head-text"
      >
        <>Onboarding</>
      </Headings>
      <Typography customClass="mt-3 text-base-regular text-light-2">
        <>Complete your profile now to use SocialApp</>
      </Typography>

      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile
          user={userData}
          btnTitle="Continue"
        />
      </section>
    </main>
  );
}

export default Page;
